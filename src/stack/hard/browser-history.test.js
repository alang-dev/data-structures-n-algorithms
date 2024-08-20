import { BrowserHistory } from './browser-history';

describe.skip('BrowserHistory', () => {
	test('should handle visiting, back, and forward operations correctly', () => {
		const history = new BrowserHistory("gfg.org");

		history.visit("google.com");
		history.visit("facebook.com");
		history.visit("youtube.com");

		expect(history.back(1)).toBe("facebook.com");
		expect(history.back(1)).toBe("google.com");
		expect(history.forward(1)).toBe("facebook.com");

		history.visit("linkedin.com");
		expect(history.forward(2)).toBe("linkedin.com");
		expect(history.back(2)).toBe("google.com");
		expect(history.back(7)).toBe("gfg.org");
	});

	test('should handle edge cases correctly', () => {
		const history = new BrowserHistory("homepage");

		expect(history.back(1)).toBe("homepage"); // No history to go back
		history.visit("site1");
		history.visit("site2");
		history.visit("site3");
		expect(history.back(1)).toBe("site2");
		expect(history.forward(1)).toBe("site3");
		history.visit("site4");
		expect(history.forward(2)).toBe("site4"); // No forward history available
		expect(history.back(1)).toBe("site3");
	});
});
