import * as assert from "node:assert";
import {findMinMaxLengthWords} from "./min-max-length-words";

describe('min max length words', () => {
	it('should return correct value', () => {
		assert.deepEqual(findMinMaxLengthWords(
				"GeeksforGeeks A computer Science portal for Geeks"),
			{min: "A", max: "GeeksforGeeks"})

		assert.deepEqual(findMinMaxLengthWords(
				"This is a test string"),
			{ min: "a", max: "string" })

		assert.deepEqual(findMinMaxLengthWords(
				"This is test string! A"),
			{ min: "A", max: "string!" })
	});
});
