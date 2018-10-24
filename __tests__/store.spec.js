import createStore from '../src/js/store';

describe("Store", () => {
	test("Should be a function", () => {
		expect(typeof createStore).toBe("function");
	});
	test("Should create an object", () => {
		const INITIAL_STATE = {};
		const state = createStore(INITIAL_STATE, ()=> {});
		expect(typeof state).toBe("object");
		expect(Object.keys(state)).toEqual(["getStore", "setStore"]);
	});
	test("Should set initial state", ()=> {
		const INITIAL_STATE = { message: ""};
		const state = createStore(INITIAL_STATE, () => {});

		expect(state.getStore()).toEqual({
			message: ""
		});
	});
	test("Should update the state", ()=> {
		const INITIAL_STATE = { message: ""};
		const state = createStore(INITIAL_STATE, () => {});

		state.setStore({
			message: "Yay! is working!",
			action: "Ready!"
		});

		expect(state.getStore()).toEqual({
			message: "Yay! is working!",
			action: "Ready!"
		});
	});
	test('Should throw an error if listener is not a function', () => {
  		expect(() => {
    			const state = createStore({ message: "yay!"}, ["not a function"]);
  		}).toThrow("Listener must be a function!");
	});
	test('Should call listeners', () => {
		const myMockListener = jest.fn();
		const state = createStore({}, myMockListener);
		state.setStore({"prop": "my prop"});
		expect(myMockListener.mock.calls.length).toBe(1);
		expect(myMockListener.mock.calls[0][0]).toEqual({});
		expect(myMockListener.mock.calls[0][1]).toEqual({"prop": "my prop"});
	});
});
