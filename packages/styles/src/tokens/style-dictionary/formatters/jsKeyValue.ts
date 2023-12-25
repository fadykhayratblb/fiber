import { Format, Named } from 'style-dictionary';

export const keyValueDescriptionFormatter: Named<Format> = {
	name: 'javascript/custom-key-value',
	formatter: ({ dictionary }) => {
		const result = dictionary.allTokens.map((token) => {
			const { value, description, type } = token;
			const obj = {
				name: `--${token.name}`,
				value,
				description,
				type,
			};
			return obj;
		});
		const commonJsExport = `module.exports = ${JSON.stringify(result, null, 2)};`;
		return commonJsExport;
	},
};
