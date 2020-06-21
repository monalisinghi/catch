import React from "react";
import renderer from "react-test-renderer";
import ProductFilter from "./index";

const sortPrice = jest.fn();

it("Product heading renders correctly", () => {
  const tree = renderer
    .create(<ProductFilter onFilterChange={sortPrice} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});