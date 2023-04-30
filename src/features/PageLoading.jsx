import React from "react";
import { motion } from "framer-motion";
import loading from "../assets/loading.png";
const PageLoading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex_center z-[9999]">
      <div className="animate-spin max-w-[200px] overflow-hidden">
        <img className="w-full object-cover" src={loading} alt="loading" />
      </div>
    </div>
  );
};

export default PageLoading;
