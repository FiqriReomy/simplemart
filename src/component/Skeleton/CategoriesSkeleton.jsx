import React from "react";

const CategoriesSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div key={index} className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col animate-pulse  ">
          <div className="flex_center flex-col border-2 border-white h-[140px] bg-[#F6FAFB]">
            <div className="w-[80px] h-[80px] bg-slate-200 rounded-lg mb-3 " />
            <h5 className="uppercase w-[100px] h-5 bg-slate-200 rounded-lg" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesSkeleton;
