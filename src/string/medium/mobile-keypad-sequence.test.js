import { sentenceToKeypadSequence } from './mobile-keypad-sequence';

describe.skip('sentenceToKeypadSequence', () => {
	test('should convert a sentence to its equivalent mobile numeric keypad sequence', () => {
		expect(sentenceToKeypadSequence('GEEKSFORGEEKS')).toBe('4333355777733366677743333557777');
		expect(sentenceToKeypadSequence('HELLO WORLD')).toBe('4433555555666096667775553');
		expect(sentenceToKeypadSequence('A B C')).toBe('2 2 22 22 22 222');
		expect(sentenceToKeypadSequence('ZOOM')).toBe('9666 666 6666');
	});

	test('should handle edge cases', () => {
		expect(sentenceToKeypadSequence('')).toBe(''); // Empty string
		expect(sentenceToKeypadSequence('A')).toBe('2'); // Single character
		expect(sentenceToKeypadSequence(' ')).toBe('0'); // Space character
	});
});
