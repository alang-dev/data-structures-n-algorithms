import { mirrorCharacters } from './mirror-characters';

describe.skip('mirrorCharacters', () => {
	test('should mirror characters from the N-th position in alphabetical order', () => {
		expect(mirrorCharacters(3, 'abcdefgh')).toBe('abzyxwvhg'); // Mirror from position 3: 'cdefgh' -> 'xwvuts'
		expect(mirrorCharacters(1, 'hello')).toBe('svool'); // Mirror from position 1: 'hello' -> 'svool'
		expect(mirrorCharacters(5, 'abcdef')).toBe('abcdvuts'); // Mirror from position 5: 'ef' -> 'vu'
	});

	test('should handle edge cases', () => {
		expect(mirrorCharacters(1, '')).toBe(''); // Empty string
		expect(mirrorCharacters(1, 'a')).toBe('z'); // Single character
		expect(mirrorCharacters(2, 'abcd')).toBe('azcd'); // Mirror from position 2
		expect(mirrorCharacters(4, 'abcd')).toBe('abwv'); // Mirror from position 4
	});
});
