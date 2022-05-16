import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { useSelector, useDispatch } from "react-redux";

import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  const dispatch = useDispatch();
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
