/**
 * Represents a Circular Queue (Ring Buffer) implemented using an array.
 *
 * @class
 */
export class CircularQueue {
	/**
	 * Creates an instance of CircularQueue with a specified size.
	 *
	 * @param {number} size - The maximum number of elements the Circular Queue can hold.
	 */
	constructor(size) {
		this.size = size;
		this.queue = new Array(size);
		this.front = 0;
		this.rear = -1;
		this.count = 0;
	}

	/**
	 * Inserts an element into the Circular Queue at the rear position.
	 *
	 * @param {any} value - The element to insert.
	 * @throws {Error} If the Circular Queue is full.
	 */
	enQueue(value) {
		// Implementation to be provided by the user
	}

	/**
	 * Deletes an element from the Circular Queue from the front position.
	 *
	 * @returns {any} The element removed.
	 * @throws {Error} If the Circular Queue is empty.
	 */
	deQueue() {
		// Implementation to be provided by the user
	}

	/**
	 * Gets the front item from the Circular Queue.
	 *
	 * @returns {any} The front item.
	 * @throws {Error} If the Circular Queue is empty.
	 */
	front() {
		// Implementation to be provided by the user
	}

	/**
	 * Gets the last item from the Circular Queue.
	 *
	 * @returns {any} The last item.
	 * @throws {Error} If the Circular Queue is empty.
	 */
	rear() {
		// Implementation to be provided by the user
	}

	/**
	 * Checks whether the Circular Queue is empty.
	 *
	 * @returns {boolean} True if the Circular Queue is empty, otherwise false.
	 */
	isEmpty() {
		// Implementation to be provided by the user
	}

	/**
	 * Checks whether the Circular Queue is full.
	 *
	 * @returns {boolean} True if the Circular Queue is full, otherwise false.
	 */
	isFull() {
		// Implementation to be provided by the user
	}
}
