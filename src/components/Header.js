import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const goTo = useNavigate();
  const cartProducts = useSelector((state) => state.product.cartProducts);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  return (
    <header>
      <h1 onClick={() => goTo("/")}>ClothingBox</h1>
      <input type="text" placeholder="search product..." />
      <div className="links">
        {categories.map((category, i) => (
          <NavLink to={"/" + category} key={i}>
            {category}
          </NavLink>
        ))}
        <NavLink to="/cart" className="cart">
          <FaCartShopping size={30} />
          <p>{cartProducts.reduce((acc, item) => acc + item.qty, 0)}</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
