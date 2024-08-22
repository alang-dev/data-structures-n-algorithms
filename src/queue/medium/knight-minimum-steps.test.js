import { minStepsKnight } from './knight-minimum-steps';

describe.skip('minStepsKnight', () => {
	it('should return minimum steps from (0,0) to (7,7) on an 8x8 board', () => {
		const N = 8;
		const start = [0, 0];
		const target = [7, 7];
		expect(minStepsKnight(N, start, target)).toBe(6);
	});

	it('should return minimum steps from (1,1) to (4,4) on an 8x8 board', () => {
		const N = 8;
		const start = [1, 1];
		const target = [4, 4];
		expect(minStepsKnight(N, start, target)).toBe(3);
	});

	it('should return minimum steps from (0,0) to (2,1) on an 8x8 board', () => {
		const N = 8;
		const start = [0, 0];
		const target = [2, 1];
		expect(minStepsKnight(N, start, target)).toBe(1);
	});

	it('should return minimum steps from (2,3) to (5,6) on an 8x8 board', () => {
		const N = 8;
		const start = [2, 3];
		const target = [5, 6];
		expect(minStepsKnight(N, start, target)).toBe(3);
	});

	it('should return 0 if the start and target positions are the same', () => {
		const N = 8;
		const start = [3, 4];
		const target = [3, 4];
		expect(minStepsKnight(N, start, target)).toBe(0);
	});

	it('should handle cases where the target is out of the board bounds', () => {
		const N = 8;
		const start = [3, 4];
		const target = [9, 10]; // Invalid target
		expect(minStepsKnight(N, start, target)).toBe(-1); // Assuming -1 indicates an invalid target
	});
});
