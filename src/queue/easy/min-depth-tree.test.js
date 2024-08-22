import { minDepth } from './min-depth-tree';

describe.skip('minDepth', () => {
	it('should return 2 for the input tree with root = [1, 2, 3, null, 4]', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: null,
				right: null,
			},
			right: {
				value: 3,
				left: null,
				right: null,
			},
		};
		expect(minDepth(root)).toBe(2);
	});

	it('should return 3 for the input tree with root = [1, 2, null, 3, null, 4]', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: {
					value: 3,
					left: {
						value: 4,
						left: null,
						right: null,
					},
					right: null,
				},
				right: null,
			},
			right: null,
		};
		expect(minDepth(root)).toBe(3);
	});
});
