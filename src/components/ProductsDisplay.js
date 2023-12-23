import React from "react";
import Product from "./Product";

const ProductsDisplay = ({ products, title }) => {
  return (
    <div>
      <h1 className="productsHeading">{title}</h1>
      <div className="products">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
