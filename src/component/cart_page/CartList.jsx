import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeCart, updateCart } from "../../redux/action/cartAction";
import { useNavigate } from "react-router-dom";

const CartList = ({ index, data, loading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(data.amount);

  const handleUpdateCart = (data, value) => {
    setCount(data.amount + value);
    dispatch(updateCart(data.data, value));
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    scroll.scrollToTop();
  };

  const btnStyle = "p-2 border rounded-full focus:outline-none hover:border-primary hover:text-primary duration-300";

  return (
    <div key={index} className="mb-5">
      <div className=" p-2 flex justify-between  rounded-md duration-300">
        <div className="flex items-start gap-2">
          {loading ? (
            <div className="relative w-[70px] h-[70px] overflow-hidden bg-slate-200 rounded-lg border" />
          ) : (
            <div className="relative w-[70px] h-[70px] flex_center overflow-hidden border">
              <img src={data.data.thumbnail} alt="cart_product" />
            </div>
          )}

          {loading ? (
            <button className="py-2 px-5">
              <div className="relative w-[150px] rounded-lg h-5 bg-slate-200" />
            </button>
          ) : (
            <button onClick={() => handleClick(data.data.id)} className="hoverBtn">
              <b>{data.data.title.length > 25 ? data.data.title.substring(0, 25) + "..." : data.data.title}</b>
            </button>
          )}
        </div>
        <div>
          {loading ? (
            <h5 className="h-5 w-[100px] bg-slate-200 rounded-lg"></h5>
          ) : (
            <h5 className="text-[14px] py-2">
              {data.data.stock < 30 ? (
                <b>{formatPrice(Math.floor(data.data.price - data.data.price * (data.data.discountPercentage / 100)) * 3000 * data.amount)}</b>
              ) : (
                <b>{formatPrice(Math.floor(data.data.price - data.data.price * (data.data.discountPercentage / 100)) * 14000 * data.amount)}</b>
              )}
            </h5>
          )}
        </div>
      </div>
      {loading ? (
        <div className="flex gap-2 justify-end">
          <div className="h-8 w-[120px] bg-slate-200 rounded-lg" />
        </div>
      ) : (
        <div className="flex gap-2 justify-end">
          <button onClick={() => dispatch(removeCart(data))}>
            <BsTrash size={20} />
          </button>
          <div className="flex items-center gap-2">
            <button onClick={() => handleUpdateCart(data, -1)} className={`${count === 1 ? "cursor-not-allowed" : ""} ${btnStyle}`} disabled={count === 1}>
              <AiOutlineMinus size={10} />
            </button>
            <input type="text" value={count} className="rounded-lg outline-none py-2 px-4 border text-[12px] text-center max-w-[50px]" readOnly />
            <button onClick={() => handleUpdateCart(data, 1)} className={`${count === data.data.stock ? "cursor-not-allowed" : ""} ${btnStyle}`} disabled={count === data.data.stock}>
              <AiOutlinePlus size={10} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
