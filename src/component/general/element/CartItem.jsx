import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../../utils/formatPrice";
import { removeCart } from "../../../redux/action/cartAction";

const CartItem = ({ index, data }) => {
  const dispatch = useDispatch();

  return (
    <div key={index} className="hoverBtn">
      <div className="flex gap-2">
        <div className="relative w-[50px] h-[50px] flex_center overflow-hidden border">
          <img src={data.data.thumbnail} alt="cart_product" />
        </div>
        <div>
          <b>{data.data.title.length > 10 ? data.data.title.substring(0, 10) + "..." : data.data.title}</b>
        </div>
      </div>
      <div>
        <h5>
          {data.data.stock < 30 ? (
            <b>{formatPrice(Math.floor(data.data.price - data.data.price * (data.data.discountPercentage / 100)) * 3000 * data.amount)}</b>
          ) : (
            <b>{formatPrice(Math.floor(data.data.price - data.data.price * (data.data.discountPercentage / 100)) * 14000 * data.amount)}</b>
          )}
        </h5>
        <div className="flex gap-2 justify-end">
          <h6>Jumlah : {data.amount}</h6>
          <button onClick={() => dispatch(removeCart(data))}>
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
