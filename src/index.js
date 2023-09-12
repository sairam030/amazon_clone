import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import your CSS styles
import App from "./App"; // Import your main application component
import reducer, { initialState } from "./reducer"; // Import reducer and initial state
import { StateProvider } from "./StateProvider"; // Import the StateProvider component
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
