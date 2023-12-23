import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/ProductSlice";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.product.cartProducts);
  const goTo = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  const handleAddToCart = () => {
    const existingProduct = cartProducts.find((p) => p.id === Number(id));
    if (existingProduct) {
      // take us to cart page, so we change qty
      goTo("/cart");
    } else {
      const p = { ...product, qty: 1 };
      dispatch(addToCart(p));
    }
  };

  const renderStar = (rate = 5) => {
    if (rate >= 5) return <FaStar color="#FFD700" size={20} />;
    else return <FaStarHalfAlt color="#FFD700" size={20} />;
  };

  return (
    <div className="details">
      <div className="detailsImage">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="detailsInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          Category: <span className="category">{product.category}</span>
        </p>
        <p className="rating">
          Rating: {renderStar(product?.rating?.rate)}{" "}
          {product?.rating?.rate || "none"} ({product?.rating?.count || "0"})
        </p>
        <p>Price: ${product.price}</p>
        <button className="btn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
