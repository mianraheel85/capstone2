import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/ProductSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.product.cartProducts);
  const goTo = useNavigate();
  const { id, title, price, image, category } = product;

  const handleAddToCart = () => {
    const existingProduct = cartProducts.find((p) => p.id === id);
    if (existingProduct) {
      // take us to cart page, so we change qty
      goTo("/cart");
    } else {
      const p = { ...product, qty: 1 };
      dispatch(addToCart(p));
    }
  };

  return (
    <div className="card">
      <Link to={"/details/" + id} className="cardImage">
        <img src={image} alt={title} />
      </Link>
      <div className="cardInfo">
        <p>
          <strong>{title}</strong>
        </p>
        <p>${price}</p>
        <p className="category">{category}</p>
        <button className="btn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
