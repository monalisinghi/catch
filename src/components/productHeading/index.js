import React from "react";

const ProductHeading = (props) => {
  const { query, page, pages, total } = props.data;
  return (
    <div className="product-heading">
      <h1>{query}</h1>
      <div className="page-count">
        Page {page} of {pages}, Total products {total}
      </div>
    </div>
  );
};

export default ProductHeading;
