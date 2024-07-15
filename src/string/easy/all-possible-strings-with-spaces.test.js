import * as assert from "node:assert";
import {generateStringsWithSpaces} from "./all-possible-strings-with-spaces";

describe('all possible strings with spaces', () => {
	it('should return correct data', () => {
		assert.deepEqual(generateStringsWithSpaces('ABC'), ["ABC", "AB C", "A BC", "A B C"])

		assert.deepEqual(generateStringsWithSpaces('ABCD'), ["ABCD", "ABC D", "AB CD", "AB C D", "A BCD", "A BC D", "A B CD", "A B C D"])
	});
});
