import { maxNodesLevel } from './max-nodes-level';

describe.skip('maxNodesLevel', () => {
	it('should return 2 for the input tree with root = [1, 2, 3, 4, 5, null, 7]', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: { value: 4, left: null, right: null },
				right: { value: 5, left: null, right: null },
			},
			right: {
				value: 3,
				left: null,
				right: { value: 7, left: null, right: null },
			},
		};
		expect(maxNodesLevel(root)).toBe(2);
	});

	it('should return 3 for the input tree with root = [1, 2, 3, 4, null, null, 5, 6, 7]', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: { value: 4, left: { value: 6, left: null, right: null }, right: { value: 7, left: null, right: null }},
				right: null,
			},
			right: {
				value: 3,
				left: null,
				right: { value: 5, left: null, right: null },
			},
		};
		expect(maxNodesLevel(root)).toBe(3);
	});
});
