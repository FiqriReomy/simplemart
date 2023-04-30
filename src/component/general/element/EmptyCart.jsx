import React from "react";
import emptyCart from "../../../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <div>
        <img src={emptyCart} alt="empty_cart" />
      </div>
      <div> Keranjang kamu masih kosong </div>
      <div>Kalo ada yang cocok, langsung tambahin aja!</div>
    </div>
  );
};

export default EmptyCart;
