import { minSwapsToBalance } from './minimum-swaps-to-balance';

describe.skip('minSwapsToBalance', () => {
	test('should calculate the minimum number of swaps required to balance the string', () => {
		expect(minSwapsToBalance('[]][][')).toBe(2);
		expect(minSwapsToBalance('[[][]]')).toBe(0);
		expect(minSwapsToBalance('[]][')).toBe(1);
		expect(minSwapsToBalance('[][][][]')).toBe(0);
		expect(minSwapsToBalance(']]][[[')).toBe(3);
	});

	test('should handle edge cases', () => {
		expect(minSwapsToBalance('')).toBe(0); // Empty string, already balanced
		expect(minSwapsToBalance('[]')).toBe(0); // Single pair, already balanced
		expect(minSwapsToBalance(']]]][[')).toBe(4); // More complex imbalance
	});
});
