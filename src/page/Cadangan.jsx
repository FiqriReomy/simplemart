import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProductByCategory, searchResult } from "../redux/action/productAction";
import ProductCard from "../component/general/productCard";
import ProductCardSkeleton from "../component/Skeleton/ProductCardSkeleton";
import FilterElement from "../component/product_search_result/FilterElement";
import ProductNotFound from "../component/product_search_result/ProductNotFound";
import ProductList from "../component/homepage/ProductList";
import FilterElementSkeleton from "../component/skeleton/FilterElementSkeleton";
import NavigationPanel from "../component/product_search_result/NavigationPanel";
import NavigationPanelSkeleton from "../component/skeleton/NavigationPanelSkeleton";
import ProductPagination from "../component/general/ProductPagination";

const ProductSearchResultPage = () => {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { searchParams, category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [productToShow, setProductToShow] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const { categories } = useSelector((state) => state.allCategories);
  const { products, loading } = useSelector((state) => state.resultSearch);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (searchParams || category) {
      dispatch(searchResult(searchParams, category));
      dispatch(getAllCategories());
    }
  }, [dispatch, category, searchParams]);

  useEffect(() => {
    if (products) {
      setFilterProducts();
    }
  }, [products, minPrice, maxPrice]);

  const setFilterProducts = async () => {
    setIsLoading(true);
    let filteredProducts = products;
    if (minPrice && maxPrice) {
      filteredProducts = await products.filter((product) => {
        return product.price * 14000 >= minPrice && product.price * 14000 <= maxPrice;
      });
    } else if (minPrice && maxPrice === "") {
      filteredProducts = await products.filter((product) => {
        return product.price * 14000 >= minPrice;
      });
    } else if (minPrice === "" && maxPrice) {
      filteredProducts = await products.filter((product) => {
        return product.price * 14000 <= maxPrice;
      });
    }
    setTimeout(() => {
      setIsLoading(false);
      setProductToShow(filteredProducts);
    }, 1000);
  };

  const responsiveStyle = "w-1/2 md:w-1/3 lg:w-1/4 p-2";

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productToShow.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productToShow.length / productsPerPage);

  const handlePaginate = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className="bg-neutral-50  min-h-screen ">
      <div className="container py-5 px-5">
        <div className="py-5 border-b-2">{searchParams ? `Home > Hasil Pencarian > ${searchParams}` : `Home > Kategori > ${category}`}</div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-[25%]  px-5 md:pr-2 md:px-0 py-5">
            {products && !loading ? <FilterElement setMaxPrice={setMaxPrice} minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} category={category} categories={categories} /> : <FilterElementSkeleton />}
          </div>
          <div className="md:w-[75%] pl-2">
            <div>
              <div className="py-5">
                {(loading && products.length === 0) || isLoading ? (
                  <div>
                    <NavigationPanelSkeleton />
                    <ProductCardSkeleton />
                  </div>
                ) : products.length === 0 || productToShow.length === 0 ? (
                  <div>
                    <ProductNotFound />
                    <ProductList />
                  </div>
                ) : (
                  <div>
                    <NavigationPanel />
                    <div className="flex flex-wrap">
                      {currentProducts.map((data, index) => (
                        <ProductCard data={data} index={index} responsiveStyle={responsiveStyle} />
                      ))}
                    </div>
                    <ProductPagination currentPage={currentPage} totalPages={totalPages} handlePaginate={handlePaginate} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchResultPage;
