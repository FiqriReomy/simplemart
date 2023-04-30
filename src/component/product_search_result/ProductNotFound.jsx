import React from "react";
import resultNotFound from "../../assets/result_notfound.png";
const ProductNotFound = () => {
  return (
    <div className="flex flex-wrap gap-5  rounded-md bg-white p-4 mb-5 shadow-lg">
      <div className="h-[120px] w-[120px] flex items-center rounded overflow-hidden">
        <img src={resultNotFound} alt="no_result" />
      </div>
      <div>
        <h4>Maaf, Produknya belum tersedia</h4>
        <p>Silakan coba kata pencarian lainnya untuk menemukan produk yang kamu cari.</p>
      </div>
    </div>
  );
};

export default ProductNotFound;
