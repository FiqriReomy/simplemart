import React, { useEffect } from "react";
import ProductList from "../component/homepage/ProductList";
import { addCart, getCart, updateCart } from "../redux/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/formatPrice";
import { decrement } from "../redux/action/counterAction";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CartList from "../component/cart_page/CartList";
import EmptyCart from "../component/general/element/EmptyCart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((acc, curr) => acc + curr.amount, 0);
  const totalPrice = cart.reduce((acc, cur) => {
    const priceAfterDiscount = Math.floor(cur.data.price - (cur.data.price * cur.data.discountPercentage) / 100);
    const pricePerUnit = cur.data.stock < 30 ? 3000 : 14000;
    return acc + priceAfterDiscount * pricePerUnit * cur.amount;
  }, 0);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, cart]);

  return (
    <div>
      <div className="container py-5 px-5">
        <div className=" mb-5 px-5">
          <h3 className="py-5 border-b-2">Keranjang Belanja</h3>
        </div>
        <div className=" flex flex-wrap">
          {cart.length === 0 ? (
            <div className="w-full py-10 px-5 text-center border">
              <EmptyCart />
              <Link to="/" className="actionBtn">
                Yuk Belanja
              </Link>
            </div>
          ) : (
            <>
              <div className="w-full md:w-[70%] p-4">
                <div className="py-10 px-5 text-center border">
                  <div class="py-2 px-2 h-[400px] ">
                    {cart.map((data, index) => (
                      <CartList data={data} index={index} loading={loading} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="fixed bottom-0 right-0 left-0 rounded-t-3xl border md:border-none md:relative md:w-[30%] p-4 bg-[#F1F6FB] md:bg-white z-[9]">
                <div className="p-2 md:p-4 rounded-xl bg-none md:bg-[#F1F6FB] ">
                  <h4 className="md:text-lg md:text-center">Detail Pesanan</h4>
                  <div className="flex_between md:block">
                    {loading ? (
                      <div className="mb-2 flex items-start justify-between md:mb-5">
                        <div className="h-4 w-[80px] bg-slate-300 rounded-lg" />
                        <div className="flex flex-col justify-start">
                          <div className="h-4 w-[100px] bg-slate-300 rounded-lg mb-2" />
                          <div className="h-4 w-[100px] bg-slate-300 rounded-lg mb-2" />
                        </div>
                      </div>
                    ) : (
                      <div className="mb-2 flex flex-col md:flex-row items-start justify-between md:mb-5">
                        <h4 className="text-sm md:text-md">Total : </h4>
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
                    )}
                    <div>{loading ? <button className="w-full actionBtn bg-slate-300 rounded-lg"></button> : <button className="w-full actionBtn">CHECKOUT ({totalAmount})</button>}</div>
                  </div>
                </div>
              </div>
            </>
          )}
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

{
  /* <div className="fixed bottom-0 right-0 left-0 rounded-t-3xl border md:border-none md:relative md:w-[30%] p-4 bg-[#F1F6FB] md:bg-white z-[9]">
<div className="p-2 md:p-4 rounded-xl bg-none md:bg-[#F1F6FB] ">
  <h4 className="md:text-lg md:text-center">Detail Pesanan</h4>
  <div className="flex_between md:block">
    {loading ? (
      <div className="mb-2 flex items-start justify-between md:mb-5">
        <div className="h-4 w-[80px] bg-slate-300 rounded-lg" />
        <div className="flex flex-col justify-start">
          <div className="h-4 w-[100px] bg-slate-300 rounded-lg mb-2" />
          <div className="h-4 w-[100px] bg-slate-300 rounded-lg mb-2" />
        </div>
      </div>
    ) : (
      <div className="mb-2 flex flex-col md:flex-row items-start justify-between md:mb-5">
        <h4 className="text-sm md:text-md">Total : </h4>
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
    )}
    <div>{loading ? <button className="w-full actionBtn bg-slate-300 rounded-lg"></button> : <button className="w-full actionBtn">CHECKOUT ({totalAmount})</button>}</div>
  </div>
</div>
</div> */
}
