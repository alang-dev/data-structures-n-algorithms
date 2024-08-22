import { bfs } from './bfs-graph';

describe.skip('bfs', () => {
	it('should return [0, 1, 2, 3, 4, 5] for the input graph and startNode = 0', () => {
		const graph = new Map([
			[0, [1, 2]],
			[1, [0, 3, 4]],
			[2, [0, 4]],
			[3, [1, 5]],
			[4, [1, 2, 5]],
			[5, [3, 4]],
		]);
		expect(bfs(graph, 0)).toEqual([0, 1, 2, 3, 4, 5]);
	});

	it('should return [2, 1, 0, 3] for the input graph and startNode = 2', () => {
		const graph = new Map([
			[0, [1]],
			[1, [0, 2, 3]],
			[2, [1]],
			[3, [1]],
		]);
		expect(bfs(graph, 2)).toEqual([2, 1, 0, 3]);
	});
});
