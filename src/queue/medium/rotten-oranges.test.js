const minTimeToRotAllOranges = require('./rotten-oranges'); // Import the function

describe.skip('minTimeToRotAllOranges', () => {
	test('Example 1', () => {
		const arr = [
			[2, 1, 0, 2, 1],
			[1, 0, 1, 2, 1],
			[1, 0, 0, 2, 1]
		];
		expect(minTimeToRotAllOranges(arr)).toBe(2);
		// Explanation: Initially rotten oranges are spread across the matrix.
		// After 1 time unit, most oranges rot, and it takes 2 time units for the final oranges to rot.
	});

	test('Example 2', () => {
		const arr = [
			[2, 1, 0, 2, 1],
			[0, 0, 1, 2, 1],
			[1, 0, 0, 2, 1]
		];
		expect(minTimeToRotAllOranges(arr)).toBe(-1);
		// Explanation: Some oranges are never reachable by rotten oranges, so not all can rot.
	});

	test('All oranges already rotten', () => {
		const arr = [
			[2, 2, 2],
			[2, 2, 2],
			[2, 2, 2]
		];
		expect(minTimeToRotAllOranges(arr)).toBe(0);
		// Explanation: All oranges are already rotten, so no additional time is needed.
	});

	test('All oranges are fresh', () => {
		const arr = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1]
		];
		expect(minTimeToRotAllOranges(arr)).toBe(-1);
		// Explanation: There are no rotten oranges to spread the rot, so the answer is -1.
	});

	test('Single cell rotten orange', () => {
		const arr = [
			[2]
		];
		expect(minTimeToRotAllOranges(arr)).toBe(0);
		// Explanation: A single cell that is already rotten, so no time needed for other oranges.
	});
});
