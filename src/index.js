import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./component/Counter";

import { todo } from "./store/reducers";

const store = createStore(todo);

const App = () => (
  <div>
    <Counter />
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
