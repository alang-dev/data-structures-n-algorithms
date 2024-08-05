import { findKthNonRepeatingCharacter } from './kth-non-repeating-character';

describe('findKthNonRepeatingCharacter', () => {
	test('should find the kth non-repeating character in the string', () => {
		expect(findKthNonRepeatingCharacter('geeksforgeeks', 3)).toBe('r');
		expect(findKthNonRepeatingCharacter('geeksforgeeks', 2)).toBe('o');
		expect(findKthNonRepeatingCharacter('geeksforgeeks', 1)).toBe('f');
	});

	test('should return a message if there are fewer than k non-repeating characters', () => {
		expect(findKthNonRepeatingCharacter('geeksforgeeks', 4)).toBe('Less than k non-repeating characters in input.');
		expect(findKthNonRepeatingCharacter('aaa', 1)).toBe('Less than k non-repeating characters in input.');
		expect(findKthNonRepeatingCharacter('aabbcc', 5)).toBe('Less than k non-repeating characters in input.');
	});

	test('should handle edge cases', () => {
		expect(findKthNonRepeatingCharacter('a', 1)).toBe('a');
		expect(findKthNonRepeatingCharacter('ab', 3)).toBe('Less than k non-repeating characters in input.');
		expect(findKthNonRepeatingCharacter('', 1)).toBe('Less than k non-repeating characters in input.');
	});
});
