import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((state) => state.product.cartProducts);

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <hr />
      <div className="cartProducts">
        {cartProducts.map((p) => (
          <CartItem key={p.id} product={p} />
        ))}
        {cartProducts.length === 0 && <h1>No items in cart, add some!</h1>}
      </div>
      <hr />
      <div className="total">
        <h1>Total: </h1>
        <p>
          $
          {cartProducts
            .reduce((acc, item) => acc + item.price * item.qty, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
