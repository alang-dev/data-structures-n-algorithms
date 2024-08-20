import { checkStackPermutation } from './stack-permutations';

describe.skip('checkStackPermutation', () => {
	test('should return YES for valid stack permutation - case 1', () => {
		const input = [1, 2, 3];
		const output = [2, 1, 3];
		const result = checkStackPermutation(input, output);
		expect(result).toBe('YES');
		// Explanation: The output can be obtained by using stack permutation as described.
	});

	test('should return Not Possible for invalid stack permutation - case 2', () => {
		const input = [1, 2, 3];
		const output = [3, 1, 2];
		const result = checkStackPermutation(input, output);
		expect(result).toBe('Not Possible');
		// Explanation: The output cannot be obtained using stack permutation.
	});
});
