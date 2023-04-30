import { useEffect, useState, useRef } from "react";
import CountdownBox from "./element/CountDownBox";
import { useDispatch, useSelector } from "react-redux";
import ProductCardDiscount from "../general/productCardDiscount";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import { getAllProductsDiscount } from "../../redux/action/productAction";
import flash_sale from "../../assets/flash_sale.jpg";
import flash_banner from "../../assets/flash_banner.webp";

const Discount = () => {
  const carousel = useRef();
  const dispatch = useDispatch();
  const [position, setPosition] = useState(0);
  const [cardToShow, setCardToShow] = useState(0);
  const { discounts } = useSelector((state) => state.allDiscount);
  const filteredDiscounts = discounts.filter((data) => data.stock < 30);
  const arrowStyle = "absolute z-[9] top-[50%] rounded-full bg-black/40 text-white w-12 h-12 -translate-y-[50%] font-bold text-lg shadow-lg opacity-0  group-hover:opacity-100 ease-in duration-300";

  const handleNext = () => {
    const slide = carousel.current.offsetWidth / cardToShow;
    const maxSlide = (filteredDiscounts.length - cardToShow) * slide;
    if (position < maxSlide) {
      setPosition(position + slide);
    }
  };

  const handlePrev = () => {
    const slide = carousel.current.offsetWidth / cardToShow;
    if (position > 0) {
      setPosition(position - slide);
    }
  };

  const handleResize = () => {
    setPosition(0);
    if (carousel.current.offsetWidth > 900) {
      setCardToShow(5);
    } else if (carousel.current.offsetWidth > 800 && carousel.current.offsetWidth <= 900) {
      setCardToShow(4);
    } else if (carousel.current.offsetWidth > 600 && carousel.current.offsetWidth <= 800) {
      setCardToShow(3);
    } else {
      setCardToShow(2);
    }
  };

  useEffect(() => {
    dispatch(getAllProductsDiscount());
  }, [dispatch]);

  useEffect(() => {
    handleResize();
  }, [window.addEventListener("resize", handleResize)]);

  return (
    <div>
      <div className="container px-0 md:px-5  flex flex-wrap">
        <CountdownBox date="2023-05-27T00:00:00" />

        <div className="container flex flex-wrap">
          <div className="hidden md:flex items-center md:w-[20%] px-2 py-0">
            <div className="overflow-hidden rounded-lg ">
              <img className="w-full bg-cover" src={flash_sale} alt="flash_sale" />
            </div>
          </div>
          <div className="w-full md:w-[80%]">
            <div className="overflow-hidden px-2 mb-2">
              <img className="w-full object-cover  rounded-lg" src={flash_banner} alt="flash_banner" />
            </div>
            {!discounts ? (
              <div className="container py-5 px-5">
                <ProductCardSkeleton />
              </div>
            ) : (
              <div className="group  relative">
                <button className={`${arrowStyle} left-5 group-hover:-left-1 `} id="prev" onClick={handlePrev}>
                  &#10094;
                </button>
                <button className={`${arrowStyle}  right-5 group-hover:-right-1`} id="next" onClick={handleNext}>
                  &#10095;
                </button>
                <div className="overflow-hidden" ref={carousel}>
                  <div className={`inner-carousel flex duration-300`} style={{ transform: `translateX(-${position}px)` }}>
                    {discounts
                      .filter((data) => data.stock < 30)
                      .map((data, index) => (
                        <ProductCardDiscount index={index} data={data} responsiveStyle=" min-w-[50%] sm:min-w-[33%] md:min-w-[25%] lg:min-w-[20%] w-1/3 p-2 " />
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
