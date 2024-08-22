/**
 * Performs Breadth-First Search (BFS) on a graph from a given starting node.
 *
 * @param {Map<number, number[]>} graph - The adjacency list representing the graph.
 *        Each key represents a node and its value is an array of its adjacent nodes.
 * @param {number} startNode - The node from which BFS traversal begins.
 * @returns {number[]} An array of nodes in the order they are visited.
 *
 * @example
 * // Input: graph = new Map([[0, [1, 2]], [1, [0, 3, 4]], [2, [0, 4]], [3, [1, 5]], [4, [1, 2, 5]], [5, [3, 4]]]),
 * //        startNode = 0
 * // Output: [0, 1, 2, 3, 4, 5]
 *
 * @example
 * // Input: graph = new Map([[0, [1]], [1, [0, 2, 3]], [2, [1]], [3, [1]]]),
 * //        startNode = 2
 * // Output: [2, 1, 0, 3]
 */
export function bfs(graph, startNode) {
	// Implementation to be provided by the user
}
