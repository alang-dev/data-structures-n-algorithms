import { generateBinaryNumbers } from './generate-binary-numbers';

describe.skip('generateBinaryNumbers', () => {
	it('should return binary numbers from 1 to 2', () => {
		const n = 2;
		expect(generateBinaryNumbers(n)).toEqual(['1', '10']);
	});

	it('should return binary numbers from 1 to 5', () => {
		const n = 5;
		expect(generateBinaryNumbers(n)).toEqual(['1', '10', '11', '100', '101']);
	});

	it('should return binary numbers from 1 to 10', () => {
		const n = 10;
		expect(generateBinaryNumbers(n)).toEqual(['1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010']);
	});

	it('should return binary numbers from 1 to 1', () => {
		const n = 1;
		expect(generateBinaryNumbers(n)).toEqual(['1']);
	});

	it('should return empty array for non-positive n', () => {
		const n = 0;
		expect(generateBinaryNumbers(n)).toEqual([]);
	});
});
