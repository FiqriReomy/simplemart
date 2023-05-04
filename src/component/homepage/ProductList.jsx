import { useEffect, useState } from "react";
import Buttons from "../general/Buttons";
import ProductCard from "../general/productCard";
import { useDispatch, useSelector } from "react-redux";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import { getAllProducts } from "../../redux/action/productAction";
import { animateScroll as scroll } from "react-scroll";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, total, loading } = useSelector((state) => state.allProducts);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [limit]);

  const loadMoreData = () => {
    setLimit(limit + 5);
    scroll.scrollToBottom();
  };

  const responsiveStyle = "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2";
  return (
    <div id="/#productlist" className="container px-0 md:px-5">
      <h4 className="px-2">REKOMENDASI PILIHAN</h4>
      {!products ? (
        <ProductCardSkeleton />
      ) : (
        <div className="mb-10">
          <div className="flex flex-wrap ">
            {products.map((data, index) => (
              <ProductCard data={data} index={index} responsiveStyle={responsiveStyle} />
            ))}
          </div>
          {loading && <ProductCardSkeleton />}
        </div>
      )}
      {total === limit ? "" : <Buttons loading={loading} action={loadMoreData} title="TAMPILKAN LEBIH BANYAK" style="actionBtn w-[95%] md:w-1/2 flex_center" />}
    </div>
  );
};

export default ProductList;
