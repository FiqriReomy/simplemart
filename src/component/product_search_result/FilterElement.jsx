import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FilterElement = ({ categories, category, setMinPrice, setMaxPrice, maxPrice, minPrice }) => {
  const navigate = useNavigate();

  const handleChange = (value) => {
    navigate(`/category/${value}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 ">
      <div className="mb-8">
        <h4 className="font-medium mb-2">Pilih Kategori</h4>
        <select onChange={(e) => handleChange(e.target.value)} name="category" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5">
          <option defaultValue value={!category ? "" : category}>
            {!category ? "Pilih kategori" : category}
          </option>
          <option value="all-categories">all-categories</option>
          {categories.map((data, index) => (
            <option key={index}>{data}</option>
          ))}
        </select>
      </div>
      <div className="mb-8">
        <h4 className="font-medium mb-2">Sesuaikan Harga</h4>
        <div className="flex flex-col gap-2">
          <input type="number" name="minPrice" value={minPrice} placeholder="Harga Minimum" className="border border-gray-300 rounded-md p-2" onChange={(e) => setMinPrice(e.target.value)} />
          <input type="number" name="maxPrice" value={maxPrice} placeholder="Harga Maximum" className="border border-gray-300 rounded-md p-2" onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
      </div>
      <div className="mb-8">
        <h4 className="font-medium mb-2">Rate tertinggi</h4>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="minRating" value="4" />
          <label htmlFor="minRating" className="flex items-center gap-2 text-sm font-medium text-gray-900">
            <p>4.5 Keatas</p>
            <FaStar color={"orange"} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterElement;
