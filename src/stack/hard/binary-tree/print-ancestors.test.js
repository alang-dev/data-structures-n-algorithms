import { printAncestors } from './print-ancestors';

describe.skip('printAncestors', () => {
	it('should return [4, 2, 1] for the input key = 8 in the provided binary tree', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: {
					value: 4,
					left: { value: 8, left: null, right: null },
					right: null,
				},
				right: {
					value: 5,
					left: null,
					right: { value: 9, left: null, right: null },
				},
			},
			right: {
				value: 3,
				left: {
					value: 6,
					left: null,
					right: null,
				},
				right: {
					value: 7,
					left: { value: 10, left: null, right: null },
					right: null,
				},
			},
		};
		const key = 8;
		expect(printAncestors(root, key)).toEqual([4, 2, 1]);
	});

	it('should return [2, 1] for the input key = 5 in the provided binary tree', () => {
		const root = {
			value: 1,
			left: {
				value: 2,
				left: {
					value: 4,
					left: { value: 8, left: null, right: null },
					right: null,
				},
				right: {
					value: 5,
					left: null,
					right: { value: 9, left: null, right: null },
				},
			},
			right: {
				value: 3,
				left: {
					value: 6,
					left: null,
					right: null,
				},
				right: {
					value: 7,
					left: { value: 10, left: null, right: null },
					right: null,
				},
			},
		};
		const key = 5;
		expect(printAncestors(root, key)).toEqual([2, 1]);
	});
});
