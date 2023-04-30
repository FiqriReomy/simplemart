import React from "react";
import slider1 from "../../assets/official_slider1.webp";
import official1 from "../../assets/official_store1.webp";
import official2 from "../../assets/official_store2.webp";
import official3 from "../../assets/official_store3.webp";
import official4 from "../../assets/official_store4.webp";

const OfficialStore = () => {
  return (
    <div className="py-5">
      <div className="container px-5">
        {" "}
        <h4>OFFICIAL STORE</h4>
      </div>

      <div className="container px-5 flex flex-wrap">
        <div className="w-1/2 md:w-1/3 p-2">
          <div className="overflow-hidden rounded-xl">
            <img className="w-full object-cover" src={slider1} alt="" />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 p-2">
          <div className="overflow-hidden rounded-xl mb-4">
            <img className="w-full object-cover" src={official1} alt="" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img className="w-full object-cover" src={official2} alt="" />
          </div>
        </div>
        <div className="w-full flex md:block gap-4 md:w-1/3 p-2">
          <div className="overflow-hidden rounded-xl mb-4">
            <img className="w-full object-cover" src={official3} alt="" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img className="w-full object-cover rounded-xl" src={official4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialStore;
