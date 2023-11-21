import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);
console.log("store", store);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
