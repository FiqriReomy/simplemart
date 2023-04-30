import React from "react";

const NavigationPanelSkeleton = () => {
  return (
    <div className=" flex justify-between rounded-md shadow-lg p-5 mb-5 animate-pulse">
      <div className="w-1/2">
        <div className="w-1/2 h-5 bg-slate-200" />
      </div>
      <div className="w-1/2 flex flex-col items-end gap-2">
        <div className="w-1/2 h-5 bg-slate-200" />
        <div className="w-1/2 h-10 bg-slate-200" />
      </div>
    </div>
  );
};

export default NavigationPanelSkeleton;
