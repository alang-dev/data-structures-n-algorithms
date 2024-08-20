import { maxSizeRectangle } from './max-size-rectangle';

describe.skip('maxSizeRectangle', () => {
	test('should find the maximum size rectangle with all 1s in the matrix', () => {
		const mat1 = [
			[0, 1, 1, 0],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 0, 0]
		];
		expect(maxSizeRectangle(mat1)).toBe(8);

		const mat2 = [
			[0, 1, 1],
			[1, 1, 1],
			[0, 1, 1]
		];
		expect(maxSizeRectangle(mat2)).toBe(6);
	});

	test('should handle edge cases correctly', () => {
		const mat3 = [
			[1]
		];
		expect(maxSizeRectangle(mat3)).toBe(1);

		const mat4 = [
			[0, 0],
			[0, 0]
		];
		expect(maxSizeRectangle(mat4)).toBe(0);

		const mat5 = [
			[1, 0],
			[1, 1]
		];
		expect(maxSizeRectangle(mat5)).toBe(2);
	});
});
