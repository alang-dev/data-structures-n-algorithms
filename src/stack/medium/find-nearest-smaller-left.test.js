import assert from 'assert';
import { findNearestSmallerLeft } from './find-nearest-smaller-left.js';

describe.skip('findNearestSmallerLeft', function() {
	it('should return the correct nearest smaller numbers for the first example', function() {
		const input = [1, 6, 4, 10, 2, 5];
		const expectedOutput = [undefined, 1, 1, 4, 1, 2];
		assert.deepStrictEqual(findNearestSmallerLeft(input), expectedOutput);
	});

	it('should return the correct nearest smaller numbers for the second example', function() {
		const input = [1, 3, 0, 2, 5];
		const expectedOutput = [undefined, 1, undefined, 0, 2];
		assert.deepStrictEqual(findNearestSmallerLeft(input), expectedOutput);
	});
});
