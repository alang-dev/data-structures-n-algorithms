import {searchPattern} from "./PatternSearching";
import * as assert from "node:assert";

describe('PatternSearching', () => {
	it('should found 3 times', () => {
		const actual = searchPattern('AABAACAADAABAABA', 'AABA')

		assert.deepEqual(actual, [0, 9, 12])
	});
});
