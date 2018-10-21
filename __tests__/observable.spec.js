"use strict";

import observable from "../src/js/observable";

describe('Observable', () => {
	test('Should be an object', () => {
		const expected = "object";
		const actual = typeof observable({}, []);
  		expect(expected).toEqual(actual);
	});
	test('Should throw an error if listener is not a function', () => {
  		expect(() => {
    			const storeObservable = observable({}, ["not a function"]);
			Reflect.set(storeObservable, "prop", "my prop");
  		}).toThrow("Listener must be a function!");	
	});
	test('Should call listeners', () => {
		const myMockListener = jest.fn();
		const storeObservable = observable({}, [myMockListener]);
		Reflect.set(storeObservable, "prop", "my prop");
		expect(myMockListener.mock.calls.length).toBe(1);
		expect(myMockListener.mock.calls[0][0]).toEqual({});
		expect(myMockListener.mock.calls[0][1]).toEqual({"prop": "my prop"});
	});
});
