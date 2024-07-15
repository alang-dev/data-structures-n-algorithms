import { minManipulationsForAnagram } from './min-manipulations-for-anagram';

describe.skip('minManipulationsForAnagram', () => {
	test('Example 1', () => {
		const s1 = "aba";
		const s2 = "baa";
		const output = 0;
		expect(minManipulationsForAnagram(s1, s2)).toBe(output);
	});

	test('Example 2', () => {
		const s1 = "ddcf";
		const s2 = "cedk";
		const output = 2;
		expect(minManipulationsForAnagram(s1, s2)).toBe(output);
	});

	test('Completely different strings', () => {
		const s1 = "abc";
		const s2 = "xyz";
		const output = 6;
		expect(minManipulationsForAnagram(s1, s2)).toBe(output);
	});

	test('Same characters but different frequencies', () => {
		const s1 = "aabbcc";
		const s2 = "ababcc";
		const output = 2;
		expect(minManipulationsForAnagram(s1, s2)).toBe(output);
	});

	test('One empty string', () => {
		const s1 = "abc";
		const s2 = "";
		const output = 3;
		expect(minManipulationsForAnagram(s1, s2)).toBe(output);
	});

	test('Both strings empty', () => {
		const s1 = "";
		const s2 = "";
		const output = 0;
		expect(minManipulationsForAnagram(s1, s2)).toBe(output);
	});
});
