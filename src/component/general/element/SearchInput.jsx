import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchSkeleton from "../../Skeleton/SearchSkeleton";
import { handleSearch } from "../../../redux/action/counterAction";
import { getAllProductsDiscount, searchProduct } from "../../../redux/action/productAction";
import { removeAllHistory, removeSingleHistory, saveHistory } from "../../../redux/action/historyAction";

const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const { openSearch } = useSelector((state) => state.counter);
  const { discounts } = useSelector((state) => state.allDiscount);
  const { prevSearch, lastSeen, isLoading } = useSelector((state) => state.historySearch);
  const { products, loading, error } = useSelector((state) => state.productSearch);

  const debouncedSearch = useCallback(
    debounce((searchParams) => {
      dispatch(searchProduct(searchParams));
    }, 500),
    []
  );

  const handleChange = (event) => {
    setSearchParams(event.target.value);
  };

  const handleSearchOpen = () => {
    dispatch(handleSearch(true));
  };

  const handleSearchByClick = (params) => {
    dispatch(saveHistory(params));
    navigate(`/product/cari/${params}`);
    dispatch(handleSearch(false));
  };

  const handleSearchByEnter = () => {
    dispatch(saveHistory(searchParams));
    navigate(`/product/cari/${searchParams}`);
    dispatch(handleSearch(false));
  };

  const handleSearchByHistory = (item) => {
    navigate(`/product/cari/${item}`);
    dispatch(handleSearch(false));
  };

  useEffect(() => {
    if (searchParams) {
      setProduct([]);
      debouncedSearch(searchParams);
    }
  }, [searchParams, debouncedSearch]);

  useEffect(() => {
    if (products) {
      setProduct(products);
    }
  }, [products]);

  useEffect(() => {
    dispatch(getAllProductsDiscount());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSearchByEnter}>
        <input
          type="search"
          className="block outline-none w-full py-2 px-2 md:px-5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Cari Produk/Nama toko"
          value={searchParams}
          onChange={handleChange}
          onFocus={handleSearchOpen}
          required
        />
      </form>
      {openSearch && (
        <div className="fixed sm:absolute right-0 left-0 px-2 ">
          <motion.div
            initial={{ opacity: 0, height: "0%" }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-h-[400px] sm:max-h-[250px] overflow-y-scroll w-full bg-white border rounded-lg z-[9] py-3 px-1 sm:px-3"
          >
            {!searchParams && prevSearch.length === 0 && !loading ? (
              <div>
                {isLoading ? (
                  "loading"
                ) : (
                  <div className="w-full mb-5">
                    <h4>Terakhir Kamu Kunjungi </h4>
                    <div className="flex flex-wrap gap-5 px-2 sm:px-5">
                      {lastSeen?.map((data, index) => (
                        <div key={index}>
                          <button onClick={() => handleSearchByHistory(data.title)} className="w-[55px] h-[55px] flex items-center rounded border overflow-hidden">
                            <img className="w-full object-cover" src={data.thumbnail} alt="last_seen" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mb-5">
                  <h4>Pencarian Populer </h4>
                  <div className="flex  gap-5 px-5">
                    {discounts.slice(0, 3).map((data, index) => (
                      <div key={index}>
                        <button onClick={() => handleSearchByHistory(data.title)} className="w-[55px] h-[55px] flex items-center rounded border overflow-hidden">
                          <img className="w-full object-cover" src={data.thumbnail} alt="last_seen" />
                        </button>
                        <p className="text-[10px]">{data.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : !searchParams && prevSearch.length !== 0 && !loading ? (
              <div>
                <div className="flex justify-between mb-5">
                  <p>Pencarian sebelumnya </p>
                  <button onClick={() => dispatch(removeAllHistory())} className="text-primary">
                    Hapus semuanya
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {prevSearch?.map((item, index) => (
                    <div className="relative" key={index}>
                      <button onClick={() => handleSearchByHistory(item)} className="relative p-4 border rounded-md bg-slate-200 hover:bg-primary duration-300">
                        {item}
                      </button>
                      <button onClick={() => dispatch(removeSingleHistory(index))} className="p-1 border hover:bg-red-500 duration-300 rounded-full bg-white absolute bottom-10 right-[-7px] ">
                        <MdClose />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : !loading && product.length > 0 ? (
              product?.map((data, index) => (
                <div onClick={() => handleSearchByClick(data.title)} key={index} className="px-2 py-2 hover:bg-slate-200 cursor-pointer rounded-md duration-300 mb-1">
                  <p>{data.title}</p>
                </div>
              ))
            ) : product.length === 0 && error ? (
              `Pencarian tidak ditemukan`
            ) : (
              <SearchSkeleton />
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SearchInput;
