// firstNonRepeating.test.js

const firstNonRepeating = require('./first-non-repeating'); // Adjust the path as needed

describe.skip('firstNonRepeating', () => {
	it('should return the first non-repeating character after each insertion', () => {
		const input1 = ['a', 'a', 'b', 'c'];
		expect(firstNonRepeating(input1)).toEqual(['a', '-1', 'b', 'b']);

		const input2 = ['a', 'a', 'c'];
		expect(firstNonRepeating(input2)).toEqual(['a', '-1', 'c']);
	});
});
