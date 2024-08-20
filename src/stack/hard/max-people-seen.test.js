import { maxPeopleSeen } from './max-people-seen';

describe.skip('maxPeopleSeen', () => {
	it('should return 6 for the input [6, 2, 5, 4, 5, 1, 6]', () => {
		const heights = [6, 2, 5, 4, 5, 1, 6];
		expect(maxPeopleSeen(heights)).toBe(6);
	});

	it('should return 3 for the input [1, 3, 6, 4]', () => {
		const heights = [1, 3, 6, 4];
		expect(maxPeopleSeen(heights)).toBe(3);
	});

	it('should return 1 for the input [1]', () => {
		const heights = [1];
		expect(maxPeopleSeen(heights)).toBe(1);
	});

	it('should return 5 for the input [2, 1, 3, 2, 4]', () => {
		const heights = [2, 1, 3, 2, 4];
		expect(maxPeopleSeen(heights)).toBe(5);
	});

	it('should return 3 for the input [5, 3, 2, 1, 4]', () => {
		const heights = [5, 3, 2, 1, 4];
		expect(maxPeopleSeen(heights)).toBe(3);
	});
});
