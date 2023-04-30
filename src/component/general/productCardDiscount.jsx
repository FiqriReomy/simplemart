import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { animateScroll as scroll } from "react-scroll";
import { addLastSeen } from "../../redux/action/historyAction";

const ProductCardDiscount = ({ data, index, responsiveStyle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(addLastSeen(data));
    navigate(`/product/${data.id}`);
    scroll.scrollToTop();
  };

  return (
    <div key={index} className={responsiveStyle}>
      <button className="w-full" onClick={() => handleClick(data)}>
        <div className="rounded-xl shadow-md bg-white text-black max-h-[320px] ">
          <div className="relative h-[150px]  rounded-t-xl">
            <span className="absolute top-[-5px] left-[-5px] text-white text-[10px] font-semibold rounded px-[6px] py-[4px] bg-red-500 ">{Math.floor(data.discountPercentage)} %</span>
            <img className=" w-full h-full object-contain rounded-t-xl" src={data.thumbnail} alt="product_image" />
          </div>
          <div className="flex flex-col justify-between p-2">
            <h5 className="font-semibold text-start mb-4" title={data.title}>
              {data.title.length > 12 ? data.title.substring(0, 12) + "..." : data.title}
            </h5>
            <div>
              <h6 className="line-through text-start leading-[12px] ">{formatPrice(data.price * 3000)} </h6>
              <h5 className="font-bold text-start">{formatPrice(Math.floor(data.price - data.price * (data.discountPercentage / 100)) * 3000)}</h5>
            </div>

            <div className="relative flex items-center  px-5 rounded-full bg-red-300 overflow-hidden mt-2">
              <div className="absolute top-0 left-0 bottom-0  bg-red-500" style={{ width: `${data.stock}` + "%" }}></div>
              <h6 className="z-[9] text-white">Tersisa: {data.stock}</h6>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ProductCardDiscount;
