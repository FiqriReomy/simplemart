import { useEffect } from "react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../../../features/Animation";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import CartSkeleton from "../../Skeleton/CartSkeleton";
import { formatPrice } from "../../../utils/formatPrice";
import { getCart } from "../../../redux/action/cartAction";

const Cart = ({ totalAmount, handleOpenCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, loading } = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, cur) => {
    const priceAfterDiscount = Math.floor(cur.data.price - (cur.data.price * cur.data.discountPercentage) / 100);
    const pricePerUnit = cur.data.stock < 30 ? 3000 : 14000;
    return acc + priceAfterDiscount * pricePerUnit * cur.amount;
  }, 0);

  const handleClick = () => {
    navigate(`/cart`);
    scroll.scrollToTop();
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, cart]);

  return (
    <motion.div variants={fadeIn(0.3, 0)} initial="hidden" animate="show" exit="exit" className="absolute top-[35px] bg-white border w-[350px] z-[99] shadow-xl rounded-xl" onMouseLeave={handleOpenCart}>
      <div className="absolute right-0 left-0 top-[-15px] cursor-pointer h-[40px] "></div>
      <div className="absolute right-0 top-[-35px] cursor-pointer  h-[40px]  w-[30px]"></div>
      {loading ? (
        <CartSkeleton />
      ) : (
        <div>
          <div className="py-2 px-5  rounded-t-xl flex items-center justify-end border-b-2">
            <button onClick={handleClick} className="hoverBtn text-primary">
              Lihat Keranjang
            </button>
          </div>
          <div>
            {cart.length === 0 ? (
              <EmptyCart />
            ) : (
              <div>
                <div class="p-2 h-[200px] overflow-y-scroll scrollbar-thin ">
                  {cart.map((data, index) => (
                    <CartItem data={data} index={index} />
                  ))}
                </div>
                <div className="py-5 px-5  rounded-b-xl flex items-center justify-between border-t-2">
                  <div>Total Produk : {totalAmount} </div>
                  {totalAmount > 4 ? (
                    <div>
                      <h5 className="text-primary text-[10px] line-through">{formatPrice(totalPrice)}</h5>
                      <h4 className="text-primary">{formatPrice(totalPrice * 0.95)}</h4>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-primary">{formatPrice(totalPrice)}</h4>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
