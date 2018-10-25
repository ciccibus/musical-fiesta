"use strict";

export default (initialState = {}, ...listeners) => {
  const handler = {
    set: (target, name, value) => {
      const oldTarget = Object.assign({}, target);
      Reflect.set(target, name, value);
      listeners.forEach(listener => {
        if (typeof listener === "function") {
          listener(oldTarget, target);
        } else {
          throw new Error("Listener must be a function!");
        }
      });
      return {
        name,
        value
      };
    }
  };
  const store = new Proxy({}, handler);

  const getStore = () => {
    return Object.assign({}, store);
  };

  const setStore = state => {
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
