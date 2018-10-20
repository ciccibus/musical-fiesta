"use strict";

import observable from "../src/js/observable";

describe('Observable', () => {
	test('Should be an object', () => {
		const expected = "object";
		const actual = typeof observable({}, {});
  		expect(expected).toEqual(actual);
	});
});
