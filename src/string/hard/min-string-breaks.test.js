import { minStringBreaks } from './min-string-breaks';

describe.skip('minStringBreaks', () => {
	test('Example 1', () => {
		const s = "CatMat";
		const dictionary = ["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"];
		const output = 1;
		expect(minStringBreaks(s, dictionary)).toBe(output);
	});

	test('Example 2', () => {
		const s = "Dogcat";
		const dictionary = ["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"];
		const output = 1;
		expect(minStringBreaks(s, dictionary)).toBe(output);
	});

	test('No breaks needed', () => {
		const s = "CatMat";
		const dictionary = ["Cat", "Mat", "Ca", "tM", "at"];
		const output = 0;
		expect(minStringBreaks(s, dictionary)).toBe(output);
	});

	test('Empty string with dictionary', () => {
		const s = "";
		const dictionary = ["Cat", "Mat", "Ca", "tM", "at"];
		const output = 0;
		expect(minStringBreaks(s, dictionary)).toBe(output);
	});

	test('No dictionary matches', () => {
		const s = "HelloWorld";
		const dictionary = ["Cat", "Mat", "Ca", "tM", "at"];
		const output = Infinity; // No possible partition
		expect(minStringBreaks(s, dictionary)).toBe(output);
	});

	test('Longer string with complex partitioning', () => {
		const s = "CatDogat";
		const dictionary = ["Cat", "Dog", "at", "Ca", "t"];
		const output = 2;
		expect(minStringBreaks(s, dictionary)).toBe(output);
	});
});
