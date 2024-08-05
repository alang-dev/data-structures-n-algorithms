import { repeatedStringQueries } from './repeated-string-queries';

describe('repeatedStringQueries', () => {
	test('should determine if characters at given indices are the same in the repeated string', () => {
		expect(repeatedStringQueries('geeksforgeeks', [[0, 8], [8, 13], [6, 15]])).toEqual(["Yes", "Yes", "No"]);
		expect(repeatedStringQueries('abcd', [[0, 4], [1, 5], [2, 6]])).toEqual(["Yes", "Yes", "Yes"]);
		expect(repeatedStringQueries('abc', [[0, 3], [3, 6], [1, 5]])).toEqual(["Yes", "Yes", "No"]);
	});

	test('should handle edge cases', () => {
		expect(repeatedStringQueries('', [[0, 0]])).toEqual(["No"]); // Empty string
		expect(repeatedStringQueries('abc', [[0, 3], [3, 6]])).toEqual(["Yes", "Yes"]); // Single character repeat
		expect(repeatedStringQueries('a', [[0, 0], [0, 1]])).toEqual(["Yes", "Yes"]); // Single character queries
	});
});
