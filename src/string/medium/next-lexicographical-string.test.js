import { nextLexicographicalString } from './next-lexicographical-string';

describe.skip('nextLexicographicalString', () => {
	test('should find the lexicographically next string from the given string', () => {
		expect(nextLexicographicalString('geeks')).toBe('geekt');
		expect(nextLexicographicalString('raavz')).toBe('raawz');
		expect(nextLexicographicalString('zzz')).toBe('zza');
		expect(nextLexicographicalString('abc')).toBe('abd');
	});

	test('should handle edge cases', () => {
		expect(nextLexicographicalString('')).toBe('a'); // Empty string case
		expect(nextLexicographicalString('a')).toBe('b'); // Single character case
		expect(nextLexicographicalString('zzzz')).toBe('zzzza'); // All characters are 'z'
	});
});
