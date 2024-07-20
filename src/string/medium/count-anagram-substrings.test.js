import { countAnagramSubstrings } from './count-anagram-substrings';

describe.skip('countAnagramSubstrings', () => {
	test('should count total substrings that are anagrams to each other', () => {
		expect(countAnagramSubstrings('xyyx')).toBe(4);
		expect(countAnagramSubstrings('geeg')).toBe(4);
		expect(countAnagramSubstrings('aab')).toBe(2);
	});

	test('should return 0 for strings with no anagram substrings', () => {
		expect(countAnagramSubstrings('abcd')).toBe(0);
		expect(countAnagramSubstrings('xyz')).toBe(0);
	});
});
