import { Deque } from './deque-circular-array';

describe.skip('Deque', () => {
	it('should correctly handle insertFront and deleteFront operations', () => {
		const deque = new Deque(3);
		deque.insertRear(1);
		deque.insertRear(2);
		deque.insertFront(3);
		expect(deque.getFront()).toBe(3);
		expect(deque.deleteFront()).toBe(3);
		expect(deque.getFront()).toBe(1);
	});

	it('should correctly handle insertRear and deleteRear operations', () => {
		const deque = new Deque(3);
		deque.insertRear(1);
		deque.insertRear(2);
		deque.insertRear(3);
		expect(deque.getRear()).toBe(3);
		expect(deque.deleteRear()).toBe(3);
		expect(deque.getRear()).toBe(2);
	});

	it('should handle edge cases', () => {
		const deque = new Deque(1);
		deque.insertFront(1);
		expect(deque.isFull()).toBe(true);
		expect(deque.getFront()).toBe(1);
		expect(deque.deleteFront()).toBe(1);
		expect(deque.isEmpty()).toBe(true);
	});
});
