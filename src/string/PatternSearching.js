/**
 * Given a text txt[0 ... N-1] and a pattern pat[0 ... M-1],
 * write a function search(char pat[], char txt[]) that prints all occurrence's indexes of pat[] in txt[].
 * You may assume that N > M.
 *
 * E.g.:
 * Input: txt[] = “THIS IS A TEST TEXT”, pat[] = “TEST”
 * Output: [10]
 *
 * Input:	txt[] =	“AABAACAADAABAABA”, pat[] =	“AABA”
 * Output: [0, 9, 12]
 *
 * @param text {string}
 * @param pattern {string}
 * @return {number[]}
 */
// TODO improve this search using Knuth-Morris-Pratt Algorithm
export function searchPattern(text, pattern) {
	const matchIndexes = []
	for (let i = 0; i < (text.length - pattern.length + 1); i++) {

		let patternPos = 0;
		while ((i + patternPos) < text.length && text.at(i + patternPos) === pattern.at(patternPos)) {
			patternPos += 1
		}

		if (patternPos === pattern.length) {
			matchIndexes.push(i)
		}
	}

	return matchIndexes
}
