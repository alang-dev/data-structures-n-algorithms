import { CircularQueue } from './circular-queue';

describe.skip('CircularQueue', () => {
	it('should correctly handle enQueue and deQueue operations', () => {
		const queue = new CircularQueue(3);
		queue.enQueue(1);
		queue.enQueue(2);
		queue.enQueue(3);
		expect(queue.rear()).toBe(3);
		expect(queue.front()).toBe(1);
		expect(queue.deQueue()).toBe(1);
		expect(queue.front()).toBe(2);
		queue.enQueue(4);
		expect(queue.rear()).toBe(4);
		expect(queue.front()).toBe(2);
	});

	it('should handle full and empty conditions correctly', () => {
		const queue = new CircularQueue(2);
		queue.enQueue(1);
		queue.enQueue(2);
		expect(queue.isFull()).toBe(true);
		expect(() => queue.enQueue(3)).toThrow('Queue is full');
		expect(queue.deQueue()).toBe(1);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.deQueue()).toBe(2);
		expect(queue.isEmpty()).toBe(true);
		expect(() => queue.deQueue()).toThrow('Queue is empty');
	});
});
