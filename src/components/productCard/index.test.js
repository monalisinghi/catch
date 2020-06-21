import React from "react";
import renderer from "react-test-renderer";
import ProductCard from "./index";

it("Product card renders correctly", () => {
  const productData = {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 5000,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 65,
  };
  const tree = renderer.create(<ProductCard data={productData} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="product"
    >
      <div
        className="product-card"
      >
        <div
          className="img-wrapper"
        >
          <img
            alt="Buy Olaplex No. 3 Hair Perfector"
            className="img-responsive"
            src="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
          />
        </div>
        <div
          className="product-data"
        >
          <div
            className="product-name"
          >
            Buy Olaplex No. 3 Hair Perfector
          </div>
          <div
            className="retail-price"
          >
            50.00
          </div>
          <div
            className="sale-price"
          >
            $
            31.45
          </div>
        </div>
      </div>
    </div>
  `);
});

it("Product card renders Sold tag when product quantity is 0", () => {
  const productData = {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 5000,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 0,
  };
  const tree = renderer.create(<ProductCard data={productData} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="product"
    >
      <div
        className="product-card"
      >
        <div
          className="img-wrapper"
        >
          <img
            alt="Buy Olaplex No. 3 Hair Perfector"
            className="img-responsive"
            src="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
          />
          <div
            className="tags"
          >
            <span
              className="sold"
            >
              Sold out
            </span>
          </div>
        </div>
        <div
          className="product-data"
        >
          <div
            className="product-name"
          >
            Buy Olaplex No. 3 Hair Perfector
          </div>
          <div
            className="retail-price"
          >
            50.00
          </div>
          <div
            className="sale-price"
          >
            $
            31.45
          </div>
        </div>
      </div>
    </div>
  `);
});

it("Product card renders correctly when retail price is 0", () => {
  const productData = {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 0,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 65,
  };
  const tree = renderer.create(<ProductCard data={productData} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="product"
    >
      <div
        className="product-card"
      >
        <div
          className="img-wrapper"
        >
          <img
            alt="Buy Olaplex No. 3 Hair Perfector"
            className="img-responsive"
            src="https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg"
          />
        </div>
        <div
          className="product-data"
        >
          <div
            className="product-name"
          >
            Buy Olaplex No. 3 Hair Perfector
          </div>
          <div
            className="retail-price"
          >
             
          </div>
          <div
            className="sale-price"
          >
            $
            31.45
          </div>
        </div>
      </div>
    </div>
  `);
});
