# musical-fiesta

Proxy experiment for manage stores.

## Usage

```javascript
import { createStore } from "musical-fiesta";

function render(oldState, newState) {
  const html = `State was:
		<pre>${JSON.stringify(oldState, null, 2)}</pre>
	Now is:
		<pre>${JSON.stringify(newState, null, 2)}</pre>
	`;

  document.body.innerHTML = html;
}

const INITIAL_STATE = { message: "" };

const state = createStore(INITIAL_STATE, render);

state.setStore({
  message: "Yay! is working!",
  action: "Ready!"
});
```
