import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { addLastSeen } from "../../redux/action/historyAction";

const ProductCard = ({ data, index, responsiveStyle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(addLastSeen(data));
    navigate(`/product/${data.id}`);
    scroll.scrollToTop();
  };

  return (
    <button key={index} className={responsiveStyle} onClick={() => handleClick(data)}>
      <div className="w-full">
        <div className="rounded-xl shadow-xl bg-white text-black max-h-[300px] ">
          <div className="relative h-[180px]  rounded-t-xl">
            {data.stock >= 80 && data.stock < 100 ? <span className="absolute top-1 left-1 text-white text-[10px] font-semibold rounded-lg px-[6px] py-[1px] bg-red-500 ">Terlaris</span> : ""}
            <img className=" w-full h-full object-cover rounded-t-xl" src={data.thumbnail} alt="product_image" />
          </div>
          <div className="p-2">
            <h5 className="text-start font-semibold mb-5" title={data.title}>
              {data.title.length > 15 ? data.title.substring(0, 15) + "..." : data.title}
            </h5>
            <div className="flex_between text-[12px]">
              <h5 className="font-semibold">{formatPrice(Math.floor(data.price * 14000))}</h5>
              <div className="flex_between gap-2">
                <FaStar className="text-yellow-500" />
                {data.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
