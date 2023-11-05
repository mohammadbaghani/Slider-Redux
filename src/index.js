import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import store from "./redux/store";
import {
  counterIncrementAction,
  counterDecrementAction,
  counterRestartAction,
} from "./redux/actionCreators";

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () =>
  root.render(
    // <React.StrictMode>
    <App
      counter={store.getState()}
      onIncrement={() => store.dispatch(counterIncrementAction())}
      onDecrement={() => store.dispatch(counterDecrementAction())}
      onRestart={() => store.dispatch(counterRestartAction())}
    />
    // </React.StrictMode>
  );

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
