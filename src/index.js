import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./components/header";
import ProductHeading from "./components/productHeading";
import {
  sortAscending,
  sortDescending,
  fetchDataFromServer,
} from "./components/utils";
import ProductFilter from "./components/productFilter";
import ProductCard from "./components/productCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      headingData: {},
      cardData: [],
      error: "",
    };
  }

  sortPrice(e) {
    if (e.target.value === "descending") {
      let sortedDesc = sortDescending(this.state.cardData);
      this.setState({ cardData: sortedDesc });
    } else {
      let sortedDesc = sortAscending(this.state.cardData);
      this.setState({ cardData: sortedDesc });
    }
  }

  componentDidMount() {
    const fetchedData = fetchDataFromServer(
      "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
    );

    fetchedData
      .then((data) => {
        this.setState({
          loading: false,
          headingData: data.metadata,
          cardData: sortAscending(data.results),
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: "Something went wrong, please try again later.",
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && (
          <div className="container">
            <div className="row">
              <div className="col-12 text-center p-y-2">
                <div className="lds-dual-ring"></div>
              </div>
            </div>
          </div>
        )}
        {this.state.error && (
          <div className="container">
            <div className="row">
              <div className="col-12 text-center p-y-2">
                <p className="error">{this.state.error}</p>
              </div>
            </div>
          </div>
        )}
        {!this.state.loading && !this.state.error && (
          <div className="wrapper">
            <Header />
            <div className="container">
              <div className="row m-b-1 space-between">
                <div className="col-md-6 col-12 m-b-1">
                  <ProductHeading data={this.state.headingData} />
                </div>
                <div className="col-md-6 col-12 text-right-md">
                  <ProductFilter onFilterChange={this.sortPrice.bind(this)} />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {this.state.cardData.map((card, index) => (
                  <ProductCard data={card} key={index} />
                ))}
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
