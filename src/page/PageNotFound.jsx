import React from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/page_not_found.png";

const PageNotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center max-w-[370px] overflow-hidden0">
          <img className="w-full object-cover" src={pagenotfound} alt="page_not_found" />
        </div>
        <div className="text-center">
          <h3 className="mb-2">Waduh, Tujuan kamu tidak ditemukan</h3>
          <h5 className="mb-5 text-[16px]">Mungkin kamu salah alamat, Yuk balik keberanda </h5>
          <Link to="/" className="actionBtn px-6 hover:px-8 duration-300">
            KEMBALI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
