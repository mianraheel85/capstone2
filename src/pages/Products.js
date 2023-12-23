import React, { useEffect, useState } from "react";
import ProductsDisplay from "../components/ProductsDisplay";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  };

  return <ProductsDisplay products={products} title="All Products" />;
};

export default Products;
