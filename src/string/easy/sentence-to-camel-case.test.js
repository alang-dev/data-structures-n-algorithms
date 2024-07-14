import {toCamelCase} from "./sentence-to-camel-case";
import * as assert from "node:assert";

describe('Sentence to Camel Case', () => {
	it('should upper first letter', () => {
		const actual = toCamelCase('i got intern at geeksforgeeks')

		assert.equal(actual, 'IGotInternAtGeeksforgeeks')
	});

	it('should remove all redundant spaces', () => {
		const actual = toCamelCase('Here        comes the garden')

		assert.equal(actual, 'HereComesTheGarden')
	});
});
