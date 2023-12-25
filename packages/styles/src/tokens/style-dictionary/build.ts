import StyleDictionary from 'style-dictionary';
import { config } from './config';
import { keyValueDescriptionFormatter } from './formatters/jsKeyValue';

StyleDictionary.registerFormat(keyValueDescriptionFormatter);
const dictionary = StyleDictionary.extend(config);

dictionary.buildAllPlatforms();
