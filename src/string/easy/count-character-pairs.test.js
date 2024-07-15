import * as assert from "node:assert";
import {countCharacterPairs} from "./count-character-pairs";

describe('count character pairs', () => {
	it('should count correctly', () => {
		assert.equal(countCharacterPairs('air'), 3)

		assert.equal(countCharacterPairs('geeksforgeeks'), 31)
	});
});
