"use strict"
import observable from './observable';

const greetings = (state) => {
    console.log("greetings", JSON.stringify(state, null, 2));
}

const INITIAL_STATE = { message: ""};

const state = observable({
    target: INITIAL_STATE,
    listener:greetings
});

state.message = "First message";

setTimeout(() => {
    state.message = "Second message";
}, 1000)
