import * as assert from "node:assert";
import {sumBinaryStrings} from "./sum-binary-string";

describe('Sum binary string', () => {
	it('should return correctly', () => {
		assert.equal(sumBinaryStrings(["1", "10"]), '11')
		assert.equal(sumBinaryStrings(['1', '11']), '100')

		assert.equal(sumBinaryStrings(['11', '11']), '110')
		assert.equal(sumBinaryStrings(["1", "10", "11"]), '110')
		assert.equal(sumBinaryStrings(["1", "10", "10", '1']), '110')

		assert.equal(sumBinaryStrings(["0", "10", "10", '0']), '100')
		assert.equal(sumBinaryStrings(["0", "0", "0", '0']), '0')

		assert.equal(sumBinaryStrings(['1']), '1')
		assert.equal(sumBinaryStrings([]), '0')
	});
});
