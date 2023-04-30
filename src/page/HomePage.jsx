import React from "react";
import Banner from "../component/homepage/Banner";
import Discounts from "../component/homepage/Discounts";
import Categories from "../component/homepage/Categories";
import ProductList from "../component/homepage/ProductList";
import OfficialStore from "../component/homepage/OfficialStore";

const HomePage = () => {
  return (
    <div className="py-10">
      <Banner />
      <Categories />
      <Discounts />
      <OfficialStore />
      <ProductList />
    </div>
  );
};

export default HomePage;
