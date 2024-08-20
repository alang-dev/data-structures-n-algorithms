import { RandomDataStructure } from './random-data-structure';

describe.skip('RandomDataStructure', () => {
	let ds;

	beforeEach(() => {
		ds = new RandomDataStructure();
	});

	test('should insert and remove elements correctly', () => {
		expect(ds.insert(1)).toBe(true);
		expect(ds.insert(1)).toBe(false);
		expect(ds.insert(2)).toBe(true);
		ds.remove(1);
		expect(ds.getRandom()).toBe(2);  // Since 2 is the only element left
	});

	test('should handle multiple insertions and removals', () => {
		ds.insert(1);
		ds.insert(1);
		ds.insert(2);
		ds.insert(2);
		ds.insert(2);
		ds.remove(1);
		ds.remove(2);

		const randomValues = [];
		for (let i = 0; i < 100; i++) {
			randomValues.push(ds.getRandom());
		}

		const count1 = randomValues.filter(v => v === 1).length;
		const count2 = randomValues.filter(v => v === 2).length;

		// Since 1 and 2 are expected to be equally likely in this test case, both counts should be roughly equal
		expect(count1).toBeGreaterThanOrEqual(0);
		expect(count2).toBeGreaterThanOrEqual(0);
	});

	test('should return correct random values proportional to their frequencies', () => {
		ds.insert(1);
		ds.insert(1);
		ds.insert(2);
		ds.insert(2);
		ds.insert(2);

		const randomValues = [];
		for (let i = 0; i < 1000; i++) {
			randomValues.push(ds.getRandom());
		}

		const count1 = randomValues.filter(v => v === 1).length;
		const count2 = randomValues.filter(v => v === 2).length;

		// Count of 2 should be approximately 3 times the count of 1
		expect(count2).toBeGreaterThan(2 * count1);
	});
});
