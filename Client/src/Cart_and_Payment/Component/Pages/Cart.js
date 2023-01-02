import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MyBag from "../Navbar/MyBag";
import "../Allcss.css/all.css";
import Emptycart from "../NodataCart/Emptycart";

import CartShow from "../CartShow/CartShow";
const Cart = () => {
  let [cartData, setCardData] = React.useState();
  let [state, setState] = React.useState(false);

  async function fetchCart(userId) {
    let res2 = await fetch(
      `https://tata-cliq-server.onrender.com/cart/${userId}`
    );
    let { cart } = await res2.json();
    console.log(cart);
    if (cart.items.length > 0) {
      setState(true);
    }
  }

  useEffect(() => {
    let userId = localStorage.getItem("userId") || "";
    if (userId !== "") {
      fetchCart(userId);
    }
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <MyBag />
      {state ? <CartShow /> : <Emptycart />}
    </div>
  );
};

export default Cart;
