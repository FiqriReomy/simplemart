import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../features/Animation";
import { MdLogout, MdSettings } from "react-icons/md";

const Menu = ({ user, handleOpenMenu, handleLogout }) => {
  return (
    <motion.div variants={fadeIn(0.3, 0)} initial="hidden" animate="show" exit="exit" className="absolute top-[35px] min-w-[200px] bg-white rounded shadow-xl p-2" onMouseLeave={handleOpenMenu}>
      <div className="absolute right-0 left-0 top-[-15px] cursor-pointer h-[40px] "></div>
      <div className="absolute right-0 top-[-35px] cursor-pointer h-[40px] w-[25px]"></div>
      <div className="hoverBtn">
        <div className="flex gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img className="object-cover w-full" src={user.image} alt="user_display" />
          </div>
          <div className="text-start text-[12px]">
            <div className="font-medium"> {user.email}</div>
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-[#F1F6FB] duration-300 text-[13px] w-full">
        <div>
          <MdSettings size={20} />
        </div>
        <div> Pengaturan</div>
      </button>
      <button onClick={handleLogout} className="flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-[#F1F6FB] duration-300 text-[13px] w-full">
        <div>
          <MdLogout size={20} />
        </div>
        <div>Keluar</div>
      </button>
    </motion.div>
  );
};

export default Menu;
