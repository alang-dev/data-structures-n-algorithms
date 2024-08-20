import { SpecialStack } from './special-stack';

describe.skip('SpecialStack', () => {
	let stack;

	beforeEach(() => {
		stack = new SpecialStack();
	});

	test('should push elements and return correct minimum', () => {
		stack.push(16);
		stack.push(15);
		stack.push(29);
		stack.push(19);
		stack.push(18);

		expect(stack.getMin()).toBe(15);
	});

	test('should pop elements and return correct minimum', () => {
		stack.push(16);
		stack.push(15);
		stack.push(29);
		stack.push(19);
		stack.push(18);

		stack.pop();
		stack.pop();

		expect(stack.getMin()).toBe(18);
	});

	test('should check if stack is empty', () => {
		expect(stack.isEmpty()).toBe(true);
		stack.push(10);
		expect(stack.isEmpty()).toBe(false);
	});

	test('should check if stack is full (assuming a limited size stack)', () => {
		// Implementation depends on stack size limitation, if any
	});

	test('should return the top element of the stack', () => {
		stack.push(10);
		stack.push(20);
		expect(stack.top()).toBe(20);
	});
});
