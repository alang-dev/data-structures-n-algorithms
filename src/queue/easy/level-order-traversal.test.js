import { levelOrderTraversal } from './level-order-traversal';

describe.skip('levelOrderTraversal', () => {
	it('should return [[1], [2, 3], [4, 5]] for the input tree with root = 1', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: { value: 4, left: null, right: null },
				right: { value: 5, left: null, right: null },
			},
			right: { value: 3, left: null, right: null },
		};
		expect(levelOrderTraversal(root)).toEqual([[1], [2, 3], [4, 5]]);
	});

	it('should return [[10], [20, 30], [40, 50, 60]] for the input tree with root = 10', () => {
		const root = {
			value: 10,
			left: {
				value: 20,
				left: null,
				right: { value: 40, left: null, right: null },
			},
			right: {
				value: 30,
				left: { value: 50, left: null, right: null },
				right: { value: 60, left: null, right: null },
			},
		};
		expect(levelOrderTraversal(root)).toEqual([[10], [20, 30], [40, 50, 60]]);
	});
});
