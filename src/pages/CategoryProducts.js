import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import ProductsDisplay from "../components/ProductsDisplay";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProducts } from "../Redux/ProductSlice";

const CategoryProducts = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );

  useEffect(() => {
    getProductsByCategory();
  }, [category]);

  const getProductsByCategory = () => {
    fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCategoryProducts(data));
      });
  };
  return <ProductsDisplay products={categoryProducts} title={category} />;
};

export default CategoryProducts;
