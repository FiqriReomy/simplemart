import React from "react";

const CartSkeleton = () => {
  return (
    <div>
      <div className="py-5 px-5  rounded-t-xl flex items-center justify-between border-b-2 animate-pulse">
        <div className="h-4 w-[75px] rounded-lg bg-slate-300"></div>
        <div className="h-4 w-[100px] rounded-lg bg-slate-300"></div>
      </div>
      <div class="my-container py-4 px-2 h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-200 animate-pulse ">
        <div className="mb-4 flex justify-between">
          <div className="flex gap-2">
            <div className="relative w-[50px] h-[50px] bg-slate-300 rounded-md border"></div>
            <div>
              <p className="h-[14px] w-[150px] bg-slate-300 rounded-md mb-2"></p>
              <p className="h-[14px] w-[75px] bg-slate-300 rounded-md"></p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="h-[14px] w-[55px] bg-slate-300 rounded-md mb-2"></p>
            <p className="h-[14px] w-[35px] bg-slate-300 rounded-md"></p>
          </div>
        </div>
        <div className="mb-4 flex justify-between">
          <div className="flex gap-2">
            <div className="relative w-[50px] h-[50px] bg-slate-300 rounded-md border"></div>
            <div>
              <p className="h-[14px] w-[150px] bg-slate-300 rounded-md mb-2"></p>
              <p className="h-[14px] w-[75px] bg-slate-300 rounded-md"></p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="h-[14px] w-[55px] bg-slate-300 rounded-md mb-2"></p>
            <p className="h-[14px] w-[35px] bg-slate-300 rounded-md"></p>
          </div>
        </div>
      </div>
      <div className="py-5 px-5  rounded-b-xl flex items-center justify-between border-t-2 animate-pulse">
        <div className="h-4 w-[75px] rounded-lg bg-slate-300"></div>
        <div className="h-4 w-[75px] rounded-lg bg-slate-300"></div>
      </div>
    </div>
  );
};

export default CartSkeleton;
