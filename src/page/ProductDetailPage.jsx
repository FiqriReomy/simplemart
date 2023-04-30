import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { reset } from "../redux/action/counterAction";
import { useDispatch, useSelector } from "react-redux";
import ProductCardSkeleton from "../component/Skeleton/ProductCardSkeleton";
import ProductImageSkeleton from "../component/skeleton/ProductImageSkeleton";
import { getProductDetails, searchResult } from "../redux/action/productAction";
import ProductImageDetail from "../component/product_detail_page/ProductImageDetail";
import ProductRelatedDetails from "../component/product_detail_page/ProductRelatedDetails";
import ProductDescriptionDetail from "../component/product_detail_page/ProductDescriptionDetail";
import ProductDescriptionDetailsSkeleton from "../component/skeleton/ProductDescriptionDetailsSkeleton";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.detailProduct);
  const { products } = useSelector((state) => state.resultSearch);
  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(reset());
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      dispatch(searchResult(id, product.category));
    }
  }, [dispatch, product]);

  return (
    <div>
      <div className="container flex flex-wrap px-5 py-5">
        <div className="w-full md:w-[40%]">{loading ? <ProductImageSkeleton /> : <ProductImageDetail product={product} />}</div>
        <div className="w-full md:w-[60%]">{loading ? <ProductDescriptionDetailsSkeleton /> : <ProductDescriptionDetail product={product} />}</div>
      </div>
      {!products || loading ? <ProductCardSkeleton /> : <ProductRelatedDetails id={product.id} product={products} />}
    </div>
  );
};

export default ProductDetailPage;
