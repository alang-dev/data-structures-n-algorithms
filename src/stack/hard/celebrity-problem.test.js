import { findCelebrity } from './celebrity-problem';

describe.skip('findCelebrity', () => {
	test('should return the correct celebrity index when one exists', () => {
		const matrix1 = [
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 1, 0]
		];
		expect(findCelebrity(matrix1)).toBe(2);

		const matrix2 = [
			[0, 1, 0],
			[0, 0, 0],
			[0, 1, 0]
		];
		expect(findCelebrity(matrix2)).toBe(1);
	});

	test('should return -1 when there is no celebrity', () => {
		const matrix1 = [
			[0, 1, 0],
			[1, 0, 1],
			[1, 1, 0]
		];
		expect(findCelebrity(matrix1)).toBe(-1);

		const matrix2 = [
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 1, 0, 1],
			[0, 0, 1, 0]
		];
		expect(findCelebrity(matrix2)).toBe(-1);
	});

	test('should handle edge cases', () => {
		const matrix1 = [
			[0]
		];
		expect(findCelebrity(matrix1)).toBe(0);

		const matrix2 = [
			[0, 1],
			[0, 0]
		];
		expect(findCelebrity(matrix2)).toBe(1);
	});
});
