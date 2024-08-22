const { describe, it, expect } = require('@jest/globals');
const shortestPathBinaryMaze = require('./shortest-path-binary-maze');

describe.skip('shortestPathBinaryMaze', () => {
	it('should return the length of the shortest path from source to destination', () => {
		const mat = [
			[1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
			[1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
			[0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
			[1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
			[1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
		];
		const src = [0, 0];
		const dest = [3, 4];
		expect(shortestPathBinaryMaze(mat, src, dest)).toBe(11);
	});

	// Add more test cases here
});
