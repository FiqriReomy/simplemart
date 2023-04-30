import React from "react";

const ProductDescriptionDetailsSkeleton = () => {
  return (
    <div className="flex justify-center items-center p-10 animate-pulse">
      <div className="w-full min-h-[450px] flex flex-col justify-between">
        <div>
          <div className="mb-2 h-4 w-1/2 bg-slate-300 rounded-lg "></div>
          <div className="mb-2 h-4 w-1/4 bg-slate-300 rounded-lg "></div>
          <div className="mb-5 h-4 w-1/3 bg-slate-300 rounded-lg"></div>
          <div className="mt-5 mb-10">
            <div className="mb-2 h-4 w-full bg-slate-300 rounded-lg"></div>
            <div className="mb-2 h-4 w-full bg-slate-300 rounded-lg"></div>
            <div className="mb-2 h-4 w-full bg-slate-300 rounded-lg"></div>
            <div className="mb-2 h-4 w-1/2 bg-slate-300 rounded-lg"></div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex gap-5 items-center">
              <div className="w-1/3">
                <div className=" h-3 mb-2 w-1/2 bg-slate-300 rounded-lg text-[50px]"></div>
                <div className="mb-5 h-10 w-full bg-slate-300 rounded-lg text-[60px]"></div>
              </div>
              <div className=" w-full">
                <div className="mb-2 h-4 w-1/4 bg-slate-300 rounded-lg text-[60px]"></div>
                <div className="mb-2 h-4 w-1/4 bg-slate-300 rounded-lg text-[60px]"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center  border-b-2 ">
              <div className="mb-5 h-10 w-1/2 bg-slate-300 rounded-lg text-[60px]"></div>
              <div className="mb-5 h-10 w-1/2 bg-slate-300 rounded-lg text-[60px]"></div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <div className="mb-2 h-4 w-1/4 bg-slate-300 rounded-lg text-[60px]"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="mb-2 h-4 w-1/5 bg-slate-300 rounded-lg text-[60px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionDetailsSkeleton;
