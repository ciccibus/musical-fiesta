// @flow
function logger<T>(state: T, newState: T): void {
  console.group("Logger");
  console.log("State:", JSON.stringify(state, null, 2));
  console.log("New State", JSON.stringify(newState, null, 2));
  console.groupEnd();
}

export default logger;
