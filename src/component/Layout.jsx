import React from "react";
import Header from "./general/Header";
import { Outlet } from "react-router-dom";
import Footer from "./general/Footer";
import { motion } from "framer-motion";
const Layout = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: "easeInOut" }} exit={{ opacity: 0 }}>
      <Header />
      <Outlet />
      <Footer />
    </motion.div>
  );
};

export default Layout;
