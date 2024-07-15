import { minBracketReversals } from './min-bracket-reversals';

describe.skip('minBracketReversals', () => {
	test('Example 1', () => {
		const exp = "}{";
		const output = 2;
		expect(minBracketReversals(exp)).toBe(output);
	});

	test('Example 2', () => {
		const exp = "{{{";
		const output = "Can't be made balanced using reversals";
		expect(minBracketReversals(exp)).toBe(output);
	});

	test('Balanced input', () => {
		const exp = "{}{}";
		const output = 0;
		expect(minBracketReversals(exp)).toBe(output);
	});

	test('Unbalanced but fixable', () => {
		const exp = "{{{{}}";
		const output = 1;
		expect(minBracketReversals(exp)).toBe(output);
	});

	test('Complex case', () => {
		const exp = "}{{}}{{{";
		const output = 2;
		expect(minBracketReversals(exp)).toBe(output);
	});

	test('Another unfixable case', () => {
		const exp = "}}}}";
		const output = 2;
		expect(minBracketReversals(exp)).toBe(output);
	});
});
