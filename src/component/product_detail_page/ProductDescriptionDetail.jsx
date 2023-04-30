import { useEffect } from "react";
import { toast } from "react-toastify";
import { GrCart } from "react-icons/gr";
import Spinner from "../../features/Spinner";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/action/cartAction";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { decrement, increment } from "../../redux/action/counterAction";
import { useNavigate } from "react-router-dom";

const ProductDescriptionDetail = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { add_loading, error, success } = useSelector((state) => state.cart);

  const handleAddCart = async () => {
    dispatch(addCart({ product, count }));
  };

  const handleClick = async () => {
    navigate(`/beli-langsung`);
    scroll.scrollToTop();
  };

  const handleIncrement = () => {
    dispatch(increment(product));
  };

  useEffect(() => {
    if (success) {
      toast.info("Berhasil menambahkan produk kedalam keranjang");
    }
    if (error) {
      toast.error("Keranjang melebihi stok produk yang ada");
    }
  }, [success, error]);

  return (
    <div key={product.id} className="flex justify-center items-center py-5 px-0 md:px-10">
      <div className="w-full min-h-[450px] flex flex-col justify-between">
        <div>
          <h4 className="mb-2 text-[20px]">{product.title}</h4>
          {product.stock < 30 ? (
            <div className="flex items-center gap-2 ">
              <h5 className="line-through text-[10px]">{formatPrice(product.price * 3000)} </h5>
              <span className="text-[8px]font-semibold rounded p-[2px] bg-red-400 ">{Math.floor(product.discountPercentage)} %</span>
            </div>
          ) : (
            ""
          )}
          {product.stock < 30 ? (
            <div>
              <h3 className="mb-5">{formatPrice(Math.floor(product.price - product.price * (product.discountPercentage / 100)) * 3000)}</h3>
              <p className="mb-10">{product.description}</p>
            </div>
          ) : (
            <div>
              <h3 className="mb-5">{formatPrice(Math.floor(product.price - product.price * (product.discountPercentage / 100)) * 14000)}</h3>
              <p className="mb-10">{product.description}</p>
            </div>
          )}
        </div>
        <div>
          <div>
            <div className="flex gap-5 items-center">
              <div>
                <p className="text-[10px]">Maksimal pembelian {product.stock} pieces</p>
                <div className="flex items-center">
                  <button onClick={() => dispatch(decrement())} className={`${count === 1 ? "cursor-not-allowed" : "cursor-pointer"} p-2 border rounded-l-md focus:outline-none`}>
                    <AiOutlineMinus size={20} />
                  </button>
                  <input type="number" max="10" value={count} className="appearance-none outline-none py-2 px-4 border text-center w-[100px]" readOnly />
                  <button onClick={handleIncrement} className={`${count === product.stock ? "cursor-not-allowed" : "cursor-pointer"} p-2 border rounded-r-md focus:outline-none`}>
                    <AiOutlinePlus size={20} />
                  </button>
                </div>
              </div>
              <div>
                <h5>Total harga :</h5>
                {product.stock < 30 ? (
                  <h4>{formatPrice(count * (Math.floor(product.price - product.price * (product.discountPercentage / 100)) * 3000))}</h4>
                ) : (
                  <h4>{formatPrice(count * (Math.floor(product.price - product.price * (product.discountPercentage / 100)) * 14000))}</h4>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center  border-b-2 py-5 ">
              {add_loading ? (
                <button className="w-1/2 processBtn  flex items-center justify-center gap-2" disabled>
                  <Spinner />
                </button>
              ) : (
                <button onClick={handleAddCart} className="w-1/2 actionBtn flex items-center justify-center gap-2" disabled={count === 0}>
                  <GrCart className="text-white" size={20} /> TAMBAH KERANJANG
                </button>
              )}
              <button className="w-1/2 actionBtn flex items-center justify-center gap-2 " onClick={handleClick}>
                BELI LANGSUNG
              </button>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <p>
                <b>Category </b>: {product.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionDetail;
