import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-wrap">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
          <div className="p-3 border rounded-md shadow-xl bg-white animate-pulse">
            <div className="h-[200px] bg-slate-300 animate-pulse"></div>
            <div className="mt-2 bg-slate-300 w-2/3 h-4 animate-pulse"></div>
            <div className="mt-2 bg-slate-300 w-1/3 h-4 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
