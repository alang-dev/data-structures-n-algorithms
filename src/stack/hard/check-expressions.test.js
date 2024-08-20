import { areExpressionsSame } from './check-expressions';

describe.skip('areExpressionsSame', () => {
	test('should return true for equivalent expressions', () => {
		expect(areExpressionsSame("-(a+b+c)", "-a-b-c")).toBe(true);
		expect(areExpressionsSame("-(c+b+a)", "-c-b-a")).toBe(true);
	});

	test('should return false for non-equivalent expressions', () => {
		expect(areExpressionsSame("a-b-(c-d)", "a-b-c-d")).toBe(false);
	});

	test('should handle complex expressions correctly', () => {
		expect(areExpressionsSame("a-(b+c)-(d-(e+f))", "a-b-c-d+e+f")).toBe(true);
		expect(areExpressionsSame("a-(b-(c-(d+e)))", "a-b+c-d-e")).toBe(false);
	});

	test('should return true for expressions with no brackets', () => {
		expect(areExpressionsSame("a-b-c", "a-b-c")).toBe(true);
		expect(areExpressionsSame("a+b-c", "a+b-c")).toBe(true);
	});
});
