import React from "react";

const ProductImageElement = ({ product, handleClick, selectedImageIndex }) => {
  return (
    <div className="py-2 flex justify-start w-full gap-2">
      {product.images?.map((image, index) => (
        <div key={index} className={`w-[80px] h-[80px] border items-center flex relative overflow-hidden cursor-pointer ${index === selectedImageIndex ? "border-blue-500" : ""}`} onClick={() => handleClick(image, index)}>
          <img className="object-cover w-full absolute" src={image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default ProductImageElement;
