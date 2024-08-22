/**
 * Represents a Deque (Double Ended Queue) implemented using a circular array.
 *
 * @class
 */
export class Deque {
	/**
	 * Creates an instance of Deque with a specified size.
	 *
	 * @param {number} size - The maximum number of elements the Deque can hold.
	 */
	constructor(size) {
		this.size = size;
		this.front = 0;
		this.rear = -1;
		this.count = 0;
		this.queue = new Array(size);
	}

	/**
	 * Adds an item at the front of the Deque.
	 *
	 * @param {any} item - The item to add.
	 * @throws {Error} If the Deque is full.
	 */
	insertFront(item) {
		// Implementation to be provided by the user
	}

	/**
	 * Adds an item at the rear of the Deque.
	 *
	 * @param {any} item - The item to add.
	 * @throws {Error} If the Deque is full.
	 */
	insertRear(item) {
		// Implementation to be provided by the user
	}

	/**
	 * Deletes an item from the front of the Deque.
	 *
	 * @returns {any} The item removed.
	 * @throws {Error} If the Deque is empty.
	 */
	deleteFront() {
		// Implementation to be provided by the user
	}

	/**
	 * Deletes an item from the rear of the Deque.
	 *
	 * @returns {any} The item removed.
	 * @throws {Error} If the Deque is empty.
	 */
	deleteRear() {
		// Implementation to be provided by the user
	}

	/**
	 * Gets the front item from the Deque.
	 *
	 * @returns {any} The front item.
	 * @throws {Error} If the Deque is empty.
	 */
	getFront() {
		// Implementation to be provided by the user
	}

	/**
	 * Gets the rear item from the Deque.
	 *
	 * @returns {any} The rear item.
	 * @throws {Error} If the Deque is empty.
	 */
	getRear() {
		// Implementation to be provided by the user
	}

	/**
	 * Checks whether the Deque is empty.
	 *
	 * @returns {boolean} True if the Deque is empty, otherwise false.
	 */
	isEmpty() {
		// Implementation to be provided by the user
	}

	/**
	 * Checks whether the Deque is full.
	 *
	 * @returns {boolean} True if the Deque is full, otherwise false.
	 */
	isFull() {
		// Implementation to be provided by the user
	}
}
