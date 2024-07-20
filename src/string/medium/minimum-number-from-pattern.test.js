import { minimumNumberFromPattern } from './minimum-number-from-pattern';

describe.skip('minimumNumberFromPattern', () => {
	test('should generate the minimum number following the given pattern', () => {
		expect(minimumNumberFromPattern('D')).toBe('21');
		expect(minimumNumberFromPattern('I')).toBe('12');
		expect(minimumNumberFromPattern('DD')).toBe('321');
		expect(minimumNumberFromPattern('II')).toBe('123');
		expect(minimumNumberFromPattern('DIDI')).toBe('21435');
		expect(minimumNumberFromPattern('IIDDD')).toBe('126543');
		expect(minimumNumberFromPattern('DDIDDIID')).toBe('321654798');
	});

	test('should handle edge cases', () => {
		expect(minimumNumberFromPattern('')).toBe('1'); // Empty pattern, single digit
		expect(minimumNumberFromPattern('DIDIIDI')).toBe('21436587');
	});
});
