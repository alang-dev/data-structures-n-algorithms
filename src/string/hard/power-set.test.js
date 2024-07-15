import {generatePowerSet} from "./power-set";

describe.skip('generatePowerSet', () => {
	test('Example 1', () => {
		const set = ['a', 'b', 'c'];
		const output = [
			[],
			['a'],
			['b'],
			['a', 'b'],
			['c'],
			['a', 'c'],
			['b', 'c'],
			['a', 'b', 'c']
		];
		expect(generatePowerSet(set)).toEqual(output);
	});

	test('Example 2', () => {
		const set = [1, 2, 3, 4];
		const output = [
			[],
			[1],
			[2],
			[1, 2],
			[3],
			[1, 3],
			[2, 3],
			[1, 2, 3],
			[4],
			[1, 4],
			[2, 4],
			[1, 2, 4],
			[3, 4],
			[1, 3, 4],
			[2, 3, 4],
			[1, 2, 3, 4]
		];
		expect(generatePowerSet(set)).toEqual(output);
	});

	test('Empty set', () => {
		const set = [];
		const output = [[]];
		expect(generatePowerSet(set)).toEqual(output);
	});

	test('Set with one element', () => {
		const set = ['a'];
		const output = [[], ['a']];
		expect(generatePowerSet(set)).toEqual(output);
	});

	test('Set with repeated elements', () => {
		const set = ['a', 'a', 'b'];
		const output = [
			[],
			['a'],
			['b'],
			['a', 'b'],
			['a', 'a'],
			['a', 'a', 'b'],
			['a', 'b', 'b'],
			['a', 'a', 'b', 'b']
		];
		expect(generatePowerSet(set)).toEqual(output);
	});

	test('Set with complex elements', () => {
		const set = [{}, null, 1];
		const output = [
			[],
			[{}],
			[null],
			[1],
			[{}, null],
			[{}, 1],
			[null, 1],
			[{}, null, 1]
		];
		expect(generatePowerSet(set)).toEqual(output);
	});
});
