import React from "react";

const ProductImageSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <div className="h-[360px] w-full border flex items-center overflow-hidden bg-slate-300 animate-pulse"></div>
      <div className="py-2 flex justify-start w-full gap-2">
        {Array(5)
          .fill()
          .map((_, index) => (
            <div key={index} className="w-[80px] h-[80px] border bg-slate-300 animate-pulse items-center flex relative overflow-hidden cursor-pointer"></div>
          ))}
      </div>
    </div>
  );
};

export default ProductImageSkeleton;
