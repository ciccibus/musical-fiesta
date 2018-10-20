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
});
