import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQty,
  increaseQty,
  removeCartItem,
} from "../Redux/ProductSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, image, price, qty } = product;

  const handleIncreaseQty = () => {
    dispatch(increaseQty(product));
  };
  const handleDecreaseQty = () => {
    dispatch(decreaseQty(product));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(product));
  };

  return (
    <div className="cartItem">
      <Link to={"/details/" + id} className="imgCon">
        <img src={image} alt="some title" />
      </Link>
      <div className="info">
        <h2>{title}</h2>
        <p>Unit Price: ${price}</p>
        <div className="qtyCon">
          <button className="btn" onClick={handleDecreaseQty}>
            -
          </button>
          <p>{qty}</p>
          <button className="btn" onClick={handleIncreaseQty}>
            +
          </button>
        </div>
      </div>
      <div className="action">
        <h2>${(price * qty).toFixed(2)}</h2>
        <button className="btn" onClick={handleRemoveCartItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
