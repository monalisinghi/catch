import React from "react";

const ProductFilter = (props) => {
  return (
    <select
      name="sortProducts"
      id="sortProducts"
      onChange={(event) => props.onFilterChange(event)}
    >
      <option value="ascending" defaultValue>
        Price (low-high)
      </option>
      <option value="descending">Price (high-low)</option>
    </select>
  );
};

export default ProductFilter;
