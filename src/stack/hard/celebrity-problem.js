/**
 * Finds the celebrity in a given square matrix.
 *
 * A celebrity is defined as a person who is known to all but does not know anyone.
 *
 * For a given matrix M, if M[i][j] = 1, it means person i knows person j.
 * The task is to identify if there is a person who is known by everyone and does not know anyone in the matrix.
 *
 * @param {number[][]} matrix - A 2D array representing the matrix where matrix[i][j] = 1 means person i knows person j.
 * @returns {number} - The index of the celebrity if one exists, otherwise -1.
 *
 * Example 1:
 *  Input: matrix = [
 *      [0, 0, 1, 0],
 *      [0, 0, 1, 0],
 *      [0, 0, 0, 0],
 *      [0, 0, 1, 0]
 *  ]
 *  Output: 2
 *  Explanation: Person with index 2 does not know anyone (row is all zeros) but is known by everyone else (column is all ones except diagonal).
 *
 * Example 2:
 *  Input: matrix = [
 *      [0, 1, 0],
 *      [0, 0, 0],
 *      [0, 1, 0]
 *  ]
 *  Output: 1
 *  Explanation: Person with index 1 is known by everyone else (column is all ones except diagonal) and does not know anyone (row is all zeros).
 *
 * Example 3:
 *  Input: matrix = [
 *      [0, 1, 0],
 *      [1, 0, 1],
 *      [1, 1, 0]
 *  ]
 *  Output: -1
 *  Explanation: There is no person who is known by everyone and does not know anyone.
 *
 * Example 4:
 *  Input: matrix = [
 *      [0, 0, 1, 0],
 *      [0, 0, 1, 0],
 *      [0, 1, 0, 1],
 *      [0, 0, 1, 0]
 *  ]
 *  Output: -1
 *  Explanation: No single person is known by everyone and does not know anyone else.
 *
 * Example 5:
 *  Input: matrix = [
 *      [0]
 *  ]
 *  Output: 0
 *  Explanation: With only one person, that person is trivially the celebrity.
 *
 * Example 6:
 *  Input: matrix = [
 *      [0, 1],
 *      [0, 0]
 *  ]
 *  Output: 1
 *  Explanation: Person with index 1 is known by everyone (column is all ones except diagonal) and does not know anyone (row is all zeros).
 */
export function findCelebrity(matrix) {
	// Implementation goes here
}
