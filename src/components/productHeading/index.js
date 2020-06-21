import React from "react";

const ProductHeading = (props) => {
  return (
    <div className="product-heading">
      <h1>{props.data && props.data.query}</h1>
      <div className="page-count">
        Page {props.data && props.data.page} of {props.data && props.data.pages}
        , Total products {props.data && props.data.total}
      </div>
    </div>
  );
};

export default ProductHeading;
