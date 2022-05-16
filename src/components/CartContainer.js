import React from "react";

import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
//import { clearCart } from "../features/cart/cartSlice";

import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>

        <h4 className="empty-cart">is curently empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span> ${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
