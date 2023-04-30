import ProductCard from "../general/productCard";

const ProductRelatedDetails = ({ product, id }) => {
  return (
    <div className="container mb-10 ">
      <h3 className="px-5 mb-5 ">PRODUK TERKAIT</h3>
      <div className="flex flex-wrap">
        {product
          .filter((data) => data.id !== id && data.stock >= 30)
          .map((data, index) => (
            <ProductCard data={data} index={index} key={data.id} responsiveStyle="w-1/2 md:w-1/3 lg:w-1/5 p-2" />
          ))}
      </div>
    </div>
  );
};

export default ProductRelatedDetails;
