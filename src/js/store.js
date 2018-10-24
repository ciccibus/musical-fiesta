"use strict";
import observable from "./observable";

export default (initialState = {}, ...listeners) => {
    const store = observable(initialState, listeners);

    const getStore = () => {
        return Object.assign({}, store);
    };

    const setStore = (state) => {
        Object.keys(state).forEach(key => {
            Reflect.set(store, key, state[key]);
        });
	 	return Object.assign({}, store, state);
    };
    
    setStore(initialState);
    
    return {
        getStore,
        setStore
    };
};
