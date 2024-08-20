const StackWithMiddleOperations = require('./stack-with-middle-operations');

describe.skip('StackWithMiddleOperations', () => {
	let stack;

	beforeEach(() => {
		stack = new StackWithMiddleOperations();
	});

	test('should push elements to the stack', () => {
		stack.push(1);
		stack.push(2);
		expect(stack.findMiddle()).toBe(1);
		stack.push(3);
		expect(stack.findMiddle()).toBe(2);
	});

	test('should pop elements from the stack', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.pop()).toBe(3);
		expect(stack.findMiddle()).toBe(1);
	});

	test('should find the middle element', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.findMiddle()).toBe(2);
		stack.push(4);
		expect(stack.findMiddle()).toBe(2);
	});

	test('should delete the middle element', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.deleteMiddle()).toBe(2);
		expect(stack.findMiddle()).toBe(1);
		stack.push(4);
		expect(stack.deleteMiddle()).toBe(1);
	});

	test('should handle empty stack', () => {
		expect(stack.findMiddle()).toBeUndefined();
		expect(stack.deleteMiddle()).toBeUndefined();
	});
});
