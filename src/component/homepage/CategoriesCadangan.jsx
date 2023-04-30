import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/action/productAction";
import CategoriesSkeleton from "../Skeleton/CategoriesSkeleton";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.allCategories);

  React.useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleClick = (data) => {
    navigate(`/category/${data}`);
    scroll.scrollToTop();
  };
  return (
    <div className="container py-5 px-5">
      <h4>KATEGORI PRODUK</h4>

      {loading ? (
        <CategoriesSkeleton />
      ) : (
        <div className="flex_center flex-wrap ">
          {categories
            .filter((category, index) => index < 10)
            .map((category, index) => (
              <button onClick={() => handleClick(category)} key={index} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 ">
                <div className=" flex_center rounded-md actionBtn border">
                  <h5>{category}</h5>
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
