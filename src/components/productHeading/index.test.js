import React from "react";
import renderer from "react-test-renderer";
import ProductHeading from "./index";

it("Product heading renders correctly", () => {
  const productData = {
    data: {
      query: "best sellers",
      total: 102,
      page: 1,
      pages: 3,
    },
  };
  const tree = renderer.create(<ProductHeading data={productData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
