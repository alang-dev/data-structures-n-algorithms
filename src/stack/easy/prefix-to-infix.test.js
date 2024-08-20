import { prefixToInfix } from './prefix-to-infix';

describe.skip('prefixToInfix', () => {
	test('should convert simple prefix expression to infix', () => {
		const input = "*+AB-CD";
		const expectedOutput = "((A+B)*(C-D))";
		expect(prefixToInfix(input)).toBe(expectedOutput);
	});

	test('should convert complex prefix expression to infix', () => {
		const input = "*-A/BC-/AKL";
		const expectedOutput = "((A-(B/C))*((A/K)-L))";
		expect(prefixToInfix(input)).toBe(expectedOutput);
	});
});
