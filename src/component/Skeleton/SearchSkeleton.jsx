import React from "react";

const SearchSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="px-2 py-2 bg-slate-300 cursor-pointer rounded-md duration-300 mb-1 w-1/3">
        <p className="text-slate-300">1</p>
      </div>
      <div className="px-2 py-2 bg-slate-300 cursor-pointer rounded-md duration-300 mb-1 w-1/2">
        <p className="text-slate-300">1</p>
      </div>
      <div className="px-2 py-2 bg-slate-300 cursor-pointer rounded-md duration-300 mb-1 ">
        <p className="text-slate-300">1</p>
      </div>
      <div className="px-2 py-2 bg-slate-300 cursor-pointer rounded-md duration-300 mb-1 ">
        <p className="text-slate-300">1</p>
      </div>
      <div className="px-2 py-2 bg-slate-300 cursor-pointer rounded-md duration-300 mb-1 ">
        <p className="text-slate-300">1</p>
      </div>
    </div>
  );
};

export default SearchSkeleton;
