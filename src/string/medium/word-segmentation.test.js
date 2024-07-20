import { canSegmentString } from './word-segmentation';

describe.skip('canSegmentString', () => {
	test('should determine if the string can be segmented into dictionary words', () => {
		expect(canSegmentString('ilike', ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 'cream', 'icecream', 'man', 'go', 'mango'])).toBe('Yes');
		expect(canSegmentString('ilikesamsung', ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 'cream', 'icecream', 'man', 'go', 'mango'])).toBe('Yes');
		expect(canSegmentString('applepie', ['apple', 'pie', 'app', 'le', 'p', 'ie'])).toBe('Yes');
		expect(canSegmentString('applepie', ['apple', 'pie', 'p', 'le', 'i', 'e'])).toBe('No');
	});

	test('should handle edge cases', () => {
		expect(canSegmentString('', ['i', 'like', 'sam'])).toBe('Yes'); // Empty string case
		expect(canSegmentString('a', ['a', 'b', 'c'])).toBe('Yes'); // Single character
		expect(canSegmentString('abcdefgh', ['ab', 'cd', 'ef', 'gh'])).toBe('Yes'); // Exact matches
		expect(canSegmentString('abcdefgh', ['abcd', 'efg', 'h'])).toBe('No'); // No valid segmentation
	});
});
