import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./components/header";
import ProductHeading from "./components/productHeading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      headingData: {},
      cardData: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          headingData: data.metadata,
          cardData: data.results,
        });
      })
      .catch((error) => console.log("Error: ", error));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="lds-dual-ring"></div>
              </div>
            </div>
          </div>
        )}
        {!this.state.loading && (
          <div className="App">
            <Header />
            <div className="container">
              <div className="row m-b-1 space-between">
                <div className="col-md-6 col-12 m-b-1">
                  <ProductHeading data={this.state.headingData} />
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
