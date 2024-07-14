/**
 * Given a sentence, remove spaces from the sentence and rewrite it in Camel case.
 * Camel case is a style of writing where there are no spaces and all words begin with capital letters.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The sentence rewritten in Camel case.
 *
 * @example
 * // Example 1
 * // Input: "I got intern at geeksforgeeks"
 * // Output: "IGotInternAtGeeksforgeeks"
 *
 * @example
 * // Example 2
 * // Input: "Here comes the garden"
 * // Output: "HereComesTheGarden"
 */
export function toCamelCase(sentence) {
	let isPrevSpace = true
	let name = ''

	for (const letter of sentence) {
		if (letter !== ' ') {
			name += isPrevSpace ? letter.toLocaleUpperCase() : letter
			isPrevSpace = false
		} else {
			isPrevSpace = true
		}
	}

	return name
}
