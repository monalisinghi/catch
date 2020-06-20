import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./components/header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cardData: [],
    };
  }
  render() {
    return <Header />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
