import { multiplyLargeNumbers } from './multiply-large-numbers';

describe.skip('multiplyLargeNumbers', () => {
	test('Example 1', () => {
		const num1 = "123";
		const num2 = "456";
		const output = "56088";
		expect(multiplyLargeNumbers(num1, num2)).toBe(output);
	});

	test('Example 2', () => {
		const num1 = "999";
		const num2 = "999";
		const output = "998001";
		expect(multiplyLargeNumbers(num1, num2)).toBe(output);
	});

	test('Multiplying by zero', () => {
		const num1 = "12345";
		const num2 = "0";
		const output = "0";
		expect(multiplyLargeNumbers(num1, num2)).toBe(output);
	});

	test('One of the numbers is zero', () => {
		const num1 = "0";
		const num2 = "999";
		const output = "0";
		expect(multiplyLargeNumbers(num1, num2)).toBe(output);
	});

	test('Large numbers with multiple digits', () => {
		const num1 = "123456789";
		const num2 = "987654321";
		const output = "121932631112635269";
		expect(multiplyLargeNumbers(num1, num2)).toBe(output);
	});

	test('Large numbers with different lengths', () => {
		const num1 = "987654321";
		const num2 = "123";
		const output = "121932631";
		expect(multiplyLargeNumbers(num1, num2)).toBe(output);
	});
});
