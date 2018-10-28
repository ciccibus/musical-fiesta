// @flow
"use strict";

export default (initialState: any = {}, ...listeners: Function[]) => {
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
      return true;
    }
  };
  const store = new Proxy({}, handler);

  const getStore = () => {
    return Object.assign({}, store);
  };

  const setStore = (state: any) => {
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
