import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../../logo.svg" alt="logo" className="logo" />
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
