// @flow
"use strict";

import applayListeners from "./listeners";

export default (initialState: any = {}, ...listeners: Function[]) => {
  const handler = {
    set: (target, name, value) => {
      const oldTarget = Object.assign({}, target);
      Reflect.set(target, name, value);
      applayListeners(listeners, oldTarget, target);
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

  const find = (key: string) => {
    return Reflect.get(store, key);
  };

  setStore(initialState);

  return {
    getStore,
    setStore,
    find
  };
};
