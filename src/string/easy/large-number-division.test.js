import * as assert from "node:assert";
import {divideLargeNumber} from "./large-number-division";

describe('large number division', () => {
	it('should divide correctly', () => {
		assert.equal(
			divideLargeNumber('1260257', 37),
			'34061'
		)

		assert.equal(
			divideLargeNumber('12313413534672234', 754),
			'16330787181262'
		)

		assert.equal(
			divideLargeNumber('1248163264128256512', 125),
			'9985306113026052'
		)
	});
});
