"use strict"
import logger from './logger';
import createStore from './store';

const INITIAL_STATE = { message: ""};

const state = createStore(INITIAL_STATE, logger);

state.setStore({
	message: "Yay! is working!",
	action: "Ready!"
});


console.log("=============");
console.log(JSON.stringify(state.getStore(), null, 2));
console.log("=============");

