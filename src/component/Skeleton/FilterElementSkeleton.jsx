import React from "react";

const FilterElementSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 animate-pulse ">
      <div className="mb-10">
        <div className="bg-slate-200 w-[120px] h-5 mb-2"></div>
        <div className="bg-slate-200 w-full h-10 mb-2" />
      </div>
      <div className="mt-4 mb-10">
        <div className="bg-slate-200 w-[80px] h-5 mb-2"></div>
        <div className="bg-slate-200 w-full h-7 mb-2" />
        <div className="bg-slate-200 w-full h-7 mb-2" />
      </div>
      <div className="mb-10">
        <div className="bg-slate-200 w-[80px] h-5 mb-2"></div>
        <div className="bg-slate-200 w-1/2 h-7 mb-2" />
      </div>
    </div>
  );
};

export default FilterElementSkeleton;
