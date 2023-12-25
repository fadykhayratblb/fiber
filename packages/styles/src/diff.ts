import { writeFileSync, unlinkSync } from 'fs';
import path from 'path';
import StyleDictionary from 'style-dictionary';

class DeepDiffMapper {
	static map = function (obj1: { [x: string]: unknown }, obj2: { [x: string]: unknown }) {
		if (this.isFunction(obj1) || this.isFunction(obj2)) {
			throw 'Invalid argument. Function given, object expected.';
		}

		if (this.isValue(obj1) || this.isValue(obj2)) {
			return this.compareValues(obj1, obj2);
		}

		const diff = {};
		for (const key in obj1) {
			if (this.isFunction(obj1[key])) {
				continue;
			}

			let value2 = undefined;
			if (obj2[key] !== undefined) {
				value2 = obj2[key];
			}

			const maybeDiff = this.map(obj1[key], value2);

			if (maybeDiff !== undefined && Object.keys(maybeDiff).length > 0) {
				diff[key] = maybeDiff;
			}
		}

		return diff;
	};
	static compareValues = function (value1: unknown, value2: unknown) {
		if (value1 !== value2) return value2;
		else return undefined;
	};
	static isFunction = function (x: unknown) {
		return Object.prototype.toString.call(x) === '[object Function]';
	};
	static isArray = function (x: unknown) {
		return Object.prototype.toString.call(x) === '[object Array]';
	};
	static isObject = function (x: unknown) {
		return Object.prototype.toString.call(x) === '[object Object]';
	};
	static isValue = function (x: unknown) {
		return !this.isObject(x) && !this.isArray(x);
	};
}

export const diff = (_inputJsonPath: string) => {
	const inputJsonPath = path.resolve(_inputJsonPath);
	const parentFolder = path.dirname(inputJsonPath);
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const standardJson = require(`./tokens/input.json`);

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const json = require(inputJsonPath);

	// get diff between standard json and input json
	const diff = DeepDiffMapper.map(standardJson, json);

	// write diff to json file
	const diffPath = path.join(parentFolder, 'diff.json');
	const diffJson = JSON.stringify(diff, null, 2);
	writeFileSync(diffPath, diffJson);

	// build diffs into css file using style-dictionary
	const dictionary = StyleDictionary.extend({
		source: [diffPath],
		platforms: {
			css: {
				prefix: 'fiber',
				buildPath: parentFolder + '/',
				transformGroup: 'scss',
				files: [
					{
						destination: 'overrides.css',
						format: 'css/variables',
						options: {
							selector: ':root, ::before, ::after',
						},
					},
				],
			},
		},
	});
	dictionary.buildAllPlatforms();

	// delete diff file
	unlinkSync(diffPath);
};
