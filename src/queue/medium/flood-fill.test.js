import { floodFill } from './flood-fill';

describe.skip('floodFill', () => {
	it('should replace color and update connected pixels for given matrix', () => {
		const img = [
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1]
		];
		const x = 1;
		const y = 1;
		const newClr = 3;
		const result = floodFill(img, x, y, newClr);
		expect(result).toEqual([
			[3, 3, 3],
			[3, 3, 0],
			[3, 0, 1]
		]);
	});

	it('should not change the matrix if old and new colors are the same', () => {
		const img = [
			[0, 0, 0],
			[0, 1, 1]
		];
		const x = 1;
		const y = 1;
		const newClr = 1;
		const result = floodFill(img, x, y, newClr);
		expect(result).toEqual([
			[0, 0, 0],
			[0, 1, 1]
		]);
	});

	it('should replace all connected pixels with new color', () => {
		const img = [
			[2, 2, 2],
			[2, 2, 2]
		];
		const x = 0;
		const y = 0;
		const newClr = 1;
		const result = floodFill(img, x, y, newClr);
		expect(result).toEqual([
			[1, 1, 1],
			[1, 1, 1]
		]);
	});

	it('should handle single row matrix', () => {
		const img = [
			[1, 1, 1, 1]
		];
		const x = 0;
		const y = 2;
		const newClr = 3;
		const result = floodFill(img, x, y, newClr);
		expect(result).toEqual([
			[1, 1, 3, 3]
		]);
	});

	it('should handle single column matrix', () => {
		const img = [
			[1],
			[1],
			[1]
		];
		const x = 1;
		const y = 0;
		const newClr = 2;
		const result = floodFill(img, x, y, newClr);
		expect(result).toEqual([
			[2],
			[2],
			[2]
		]);
	});
});
