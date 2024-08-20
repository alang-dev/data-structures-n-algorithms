import { longestCorrectBracketSubsequence } from './longest-correct-bracket-subsequence';

describe.skip('longestCorrectBracketSubsequence', () => {
	it('should return 10 for the input S = "())(())(())(", startIndex = 0, endIndex = 11', () => {
		const S = "())(())(())(";
		const startIndex = 0;
		const endIndex = 11;
		expect(longestCorrectBracketSubsequence(S, startIndex, endIndex)).toBe(10);
	});

	it('should return 0 for the input S = "())(())(())(", startIndex = 1, endIndex = 2', () => {
		const S = "())(())(())(";
		const startIndex = 1;
		const endIndex = 2;
		expect(longestCorrectBracketSubsequence(S, startIndex, endIndex)).toBe(0);
	});
});
