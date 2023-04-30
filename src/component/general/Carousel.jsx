import React from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <motion.div className="carousel overflow-hidden">
      <motion.div className="inner-carousel flex">
        {discounts.map((data, index) => (
          <motion.div className="item min-h-[40rem] min-w-[30rem] w-1/3 p-[40px]">
            <img className="w-full h-full rounded-[4px]" src={data.thumbnail} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
