import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import CategoriesSkeleton from "../Skeleton/CategoriesSkeleton";
import { getAllCategories } from "../../redux/action/productAction";

// images
import tops from "../../assets/tops.png";
import laptops from "../../assets/laptops.png";
import skincare from "../../assets/skincare.png";
import furniture from "../../assets/furniture.png";
import groceries from "../../assets/groceries.png";
import fragrances from "../../assets/fragrances.png";
import womendress from "../../assets/womendress.png";
import womenshoes from "../../assets/womenshoes.png";
import smartphones from "../../assets/smartphones.png";
import homedecoration from "../../assets/homedecoration.png";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.allCategories);
  const images = [smartphones, laptops, fragrances, skincare, groceries, homedecoration, furniture, tops, womendress, womenshoes];
  const elements = [];

  for (let i = 0; i < 10; i++) {
    const category = categories[i];
    const image = images[i];
    elements.push(
      <div onClick={() => handleClick(category)} key={i} className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col cursor-pointer  ">
        <div className="flex_center flex-col border-2 border-white h-[140px] bg-[#F6FAFB] overflow-hidden ">
          <img className="w-[70px]" src={image} alt={category} />
          <h5 className="uppercase">{category}</h5>
        </div>
      </div>
    );
  }

  React.useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleClick = (data) => {
    navigate(`/category/${data}`);
    scroll.scrollToTop();
  };

  return (
    <div className="container py-5 px-5">
      <h4>KATEGORI POPULER</h4>
      <div className="flex_center flex-wrap ">{loading ? <CategoriesSkeleton /> : elements}</div>
    </div>
  );
};

export default Categories;
