import { findShortestPath } from './shortest-path-example';

describe.skip('findShortestPath', () => {
	test('should find the shortest path to type all characters of the input string', () => {
		expect(findShortestPath('GEEK')).toEqual([
			'Move Down', 'Move Right', 'Press OK', 'Move Up', 'Move Right',
			'Move Right', 'Move Right', 'Press OK', 'Press OK', 'Move Left',
			'Move Left', 'Move Left', 'Move Left', 'Move Down', 'Move Down',
			'Press OK'
		]);
		expect(findShortestPath('HELLO')).toEqual([
			'Move Down', 'Move Right', 'Move Right', 'Move Down', 'Press OK',
			'Move Up', 'Move Right', 'Press OK', 'Move Right', 'Press OK',
			'Move Left', 'Move Left', 'Press OK'
		]);
		expect(findShortestPath('ABC')).toEqual([
			'Move Right', 'Press OK', 'Move Down', 'Press OK', 'Move Down',
			'Press OK'
		]);
		expect(findShortestPath('A')).toEqual([
			'Press OK'
		]);
	});

	test('should handle edge cases', () => {
		expect(findShortestPath('')).toEqual([]); // Empty input
		expect(findShortestPath('Z')).toEqual([
			'Move Down', 'Move Right', 'Move Down', 'Move Right', 'Move Down',
			'Move Right', 'Press OK'
		]); // Single character, bottom-right corner
	});
});
