import { stockSpan } from './stock-span';

describe.skip('stockSpan', () => {
	test('should calculate stock span for given prices', () => {
		const prices1 = [100, 80, 60, 70, 60, 75, 85];
		const expectedOutput1 = [1, 1, 1, 2, 1, 4, 6];
		expect(stockSpan(prices1.length, prices1)).toEqual(expectedOutput1);

		const prices2 = [10, 4, 5, 90, 120, 80];
		const expectedOutput2 = [1, 1, 2, 4, 5, 1];
		expect(stockSpan(prices2.length, prices2)).toEqual(expectedOutput2);
	});
});
