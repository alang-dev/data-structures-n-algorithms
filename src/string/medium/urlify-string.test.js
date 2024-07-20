import { urlify } from './urlify-string';

describe.skip('urlify', () => {
	test('should replace spaces with %20 in the string', () => {
		expect(urlify('Mr John Smith   ', 13)).toBe('Mr%20John%20Smith');
		expect(urlify('Hello World  ', 11)).toBe('Hello%20World');
		expect(urlify('Spaces  Here    ', 12)).toBe('Spaces%20%20Here');
		expect(urlify('NoSpaces', 8)).toBe('NoSpaces'); // No spaces to replace
	});

	test('should handle edge cases', () => {
		expect(urlify('', 0)).toBe(''); // Empty string
		expect(urlify('   ', 0)).toBe(''); // Only spaces
		expect(urlify('Multiple   Spaces    ', 18)).toBe('Multiple%20%20Spaces%20%20'); // Multiple spaces
	});
});
