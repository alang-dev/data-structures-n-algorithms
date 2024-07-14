import * as assert from "node:assert";
import {binaryFromPattern} from "./binary-from-pattern";

describe('PatternSearching', () => {
	it('should found 8 sorted strings', () => {
		const actual = binaryFromPattern('1??0?101')

		assert.deepEqual(actual, [
			'10000101',
			'10001101',
			'10100101',
			'10101101',
			'11000101',
			'11001101',
			'11100101',
			'11101101'
		])
	});
});
