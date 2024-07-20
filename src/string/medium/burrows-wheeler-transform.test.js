import { burrowsWheelerTransform } from './burrows-wheeler-transform';

describe.skip('burrowsWheelerTransform', () => {
	test('should correctly transform the input text', () => {
		expect(burrowsWheelerTransform('banana$')).toBe('annb$aa');
		expect(burrowsWheelerTransform('abracadabra$')).toBe('ard$rcaaaabb');
		expect(burrowsWheelerTransform('a$')).toBe('a$');
		expect(burrowsWheelerTransform('')).toBe('');
	});
});
