import { countBinaryStrings } from './count-binary-strings';

describe('countBinaryStrings', () => {
	test('should count all possible distinct binary strings of length N without consecutive 1\'s', () => {
		expect(countBinaryStrings(2)).toBe(3);
		expect(countBinaryStrings(3)).toBe(5);
		expect(countBinaryStrings(4)).toBe(8);
	});

	test('should return 1 for N = 1', () => {
		expect(countBinaryStrings(1)).toBe(2); // "0", "1"
	});

	test('should return 0 for non-positive N', () => {
		expect(countBinaryStrings(0)).toBe(0);
		expect(countBinaryStrings(-1)).toBe(0);
	});
});
