import React from "react";
import "./index.css";
const ProductItem = (props) => {
  const { productData } = props;
  const { imageUrl, discountPercentage, price, name } = productData;
  const discount = Math.floor(
    (productData.discountPercentage / 100) * productData.price
  );
  console.log(discount);
  return (
    <li className="product-item-list">
      <img src={imageUrl} alt="product image" className="product-image" />
      <img
        src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713114214/Bookmark_to3rtr.png"
        alt="save"
        className="save-img"
      />
      <div className="item-about-card">
        <p className="item-name">{name}</p>
        <div className="list-footer-card">
          <p className="discount-price">
            Rs {discount} <span className="original-price">{price}</span>
            <span className="percentage-off">
              ({`${discountPercentage} % OFF`})
            </span>
          </p>
          <img
            src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713125373/Group_450_i17wbb.png"
            alt="add to cart"
          />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
