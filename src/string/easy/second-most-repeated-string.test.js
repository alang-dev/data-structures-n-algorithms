import * as assert from "node:assert";
import {secondMostRepeatedString} from "./second-most-repeated-string";

describe('second most repeated string', () => {
	it('should return correctly', () => {
		assert.equal(secondMostRepeatedString(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"]), "bbb")

		assert.equal(secondMostRepeatedString(["geeks", "for", "geeks", "for", "geeks", "aaa"]), "for")
	});
});
