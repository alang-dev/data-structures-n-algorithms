import { minRotations } from './min-rotations';

describe.skip('minRotations', () => {
	test('Example 1', () => {
		const s = "geeks";
		const output = 5;
		expect(minRotations(s)).toBe(output);
	});

	test('Example 2', () => {
		const s = "aaaa";
		const output = 1;
		expect(minRotations(s)).toBe(output);
	});

	test('Single character', () => {
		const s = "a";
		const output = 1;
		expect(minRotations(s)).toBe(output);
	});

	test('Repeated characters with rotation', () => {
		const s = "abcabcabc";
		const output = 3;
		expect(minRotations(s)).toBe(output);
	});

	test('Empty string', () => {
		const s = "";
		const output = 0;
		expect(minRotations(s)).toBe(output);
	});

	test('Longer string with repeated segments', () => {
		const s = "abababab";
		const output = 4;
		expect(minRotations(s)).toBe(output);
	});
});
