import { wordWrap } from './word-wrap';

describe.skip('wordWrap', () => {
	test('Example 1', () => {
		const wordLengths = [3, 2, 2, 5];
		const output = [1, 1, 2, 3, 4, 4];
		expect(wordWrap(wordLengths)).toEqual(output);
	});

	test('Example 2', () => {
		const wordLengths = [3, 2, 2];
		const output = [1, 1, 2, 2, 3, 3];
		expect(wordWrap(wordLengths)).toEqual(output);
	});

	test('Single word fits on one line', () => {
		const wordLengths = [5];
		const output = [1, 1];
		expect(wordWrap(wordLengths)).toEqual(output);
	});

	test('All words fit on one line', () => {
		const wordLengths = [1, 2, 3, 4, 5];
		const output = [1, 5];
		expect(wordWrap(wordLengths)).toEqual(output);
	});

	test('Multiple lines with varying lengths', () => {
		const wordLengths = [4, 3, 1, 5, 2];
		const output = [1, 1, 2, 3, 4, 5];
		expect(wordWrap(wordLengths)).toEqual(output);
	});

	test('Empty input', () => {
		const wordLengths = [];
		const output = [];
		expect(wordWrap(wordLengths)).toEqual(output);
	});
});
