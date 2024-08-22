import { numIslands } from './islands-bfs';

describe.skip('numIslands', () => {
	it('should return 4 islands for the given matrix', () => {
		const M = [
			['1', '1', '0', '0', '0'],
			['0', '1', '0', '0', '1'],
			['1', '0', '0', '1', '1'],
			['0', '0', '0', '0', '0'],
			['1', '0', '1', '1', '0']
		];
		expect(numIslands(M)).toBe(4);
	});

	it('should return 1 island for the given matrix', () => {
		const M = [
			['1', '1'],
			['1', '1']
		];
		expect(numIslands(M)).toBe(1);
	});

	it('should return 0 islands for the given matrix', () => {
		const M = [
			['0', '0'],
			['0', '0']
		];
		expect(numIslands(M)).toBe(0);
	});

	it('should return 3 islands for a matrix with mixed 0s and 1s', () => {
		const M = [
			['1', '0', '0', '1'],
			['0', '1', '0', '0'],
			['0', '0', '1', '0'],
			['1', '0', '0', '1']
		];
		expect(numIslands(M)).toBe(3);
	});

	it('should handle edge case of an empty matrix', () => {
		const M = [];
		expect(numIslands(M)).toBe(0);
	});
});
