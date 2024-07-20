import { canFormCircle } from './can-form-circle';

describe('canFormCircle', () => {
	test('Example 1', () => {
		const input = ["geek", "king"];
		const output = true;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 2', () => {
		const input = ["for", "geek", "rig", "kaf"];
		const output = true;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 3', () => {
		const input = ["aab", "bac", "aaa", "cda"];
		const output = true;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 4', () => {
		const input = ["aaa", "bbb", "baa", "aab"];
		const output = true;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 5', () => {
		const input = ["aaa"];
		const output = true;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 6', () => {
		const input = ["aaa", "bbb"];
		const output = false;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 7', () => {
		const input = ["abc", "efg", "cde", "ghi", "ija"];
		const output = true;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 8', () => {
		const input = ["ijk", "kji", "abc", "cba"];
		const output = false;
		expect(canFormCircle(input)).toBe(output);
	});

	test('Example 9', () => {
		const input = [];
		const output = false;
		expect(canFormCircle(input)).toBe(output);
	});
});
