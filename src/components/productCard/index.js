import React from "react";
import { formatAmount, convertToDollars } from "../utils";

const ProductCard = (props) => {
  const {
    imageUrl,
    name,
    quantityAvailable,
    retailPrice,
    salePrice,
  } = props.data;

  return (
    <div className="product">
      <div className="product-card">
        <div className="img-wrapper">
          <img src={imageUrl} alt={name} className="img-responsive" />
          {quantityAvailable === 0 && (
            <div className="tags">
              <span className="sold">Sold out</span>
            </div>
          )}
        </div>
        <div className="product-data">
          <div className="product-name">{name}</div>
          <div className="retail-price">
            {retailPrice > 0
              ? formatAmount(convertToDollars(retailPrice))
              : " "}
          </div>
          {salePrice && (
            <div className="sale-price">
              ${formatAmount(convertToDollars(salePrice))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
