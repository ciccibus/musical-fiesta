// @flow
function applyListeners<T>(listeners: Function[], oldTarget: T, target: T) {
  listeners.forEach(listener => {
    if (typeof listener === "function") {
      listener(oldTarget, target);
    } else {
      throw new Error("Listener must be a function!");
    }
  });
}

export default applyListeners;
