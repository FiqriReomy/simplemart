import {
  GET_ALL_PRODUCT_PROCESS,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_PRODUCT_DISCOUNT_PROCESS,
  GET_PRODUCT_DISCOUNT_SUCCESS,
  GET_PRODUCT_DISCOUNT_FAIL,
  GET_PRODUCT_DETAIL_PROCESS,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_ALL_CATEGORY_PROCESS,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  SEARCH_PRODUCT_PROCESS,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  SEARCH_RESULT_PROCESS,
  SEARCH_RESULT_SUCCESS,
  SEARCH_RESULT_FAIL,
} from "../constant/productType";
import axios from "axios";

export const getAllProducts = (value) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCT_PROCESS });
    setTimeout(async () => {
      const { data } = await axios.get(`https://dummyjson.com/products?limit=${value}`);
      dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: data });
    }, 500);
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCT_FAIL, payload: data });
  }
};

// GET ONLY DISCOUNT PRODUCT
export const getAllProductsDiscount = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DISCOUNT_PROCESS });
    setTimeout(async () => {
      const { data } = await axios.get(`https://dummyjson.com/products?limit=100`);
      dispatch({ type: GET_PRODUCT_DISCOUNT_SUCCESS, payload: data });
    }, 500);
  } catch (error) {
    dispatch({ type: GET_PRODUCT_DISCOUNT_FAIL, payload: error.response.data.message });
  }
};

// GET PRODUCT DETAIL
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAIL_PROCESS });

    setTimeout(async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    }, 500);
  } catch (error) {
    dispatch({ type: GET_PRODUCT_DETAIL_FAIL, payload: error.response.data.message });
  }
};

// GET ALL CATEGORIES
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_PROCESS });

    setTimeout(async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/categories`);
      dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
    }, 500);
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORY_FAIL, payload: error.response.data.message });
  }
};

// GET RELATED PRODUCT BY SAME CATEGORY
export const getAllProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCT_CATEGORY_PROCESS });

    setTimeout(async () => {
      if (category === "all-categories") {
        const { data } = await axios.get(`https://dummyjson.com/products?limit=100`);
        dispatch({ type: GET_ALL_PRODUCT_CATEGORY_SUCCESS, payload: data });
      } else {
        const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
        dispatch({ type: GET_ALL_PRODUCT_CATEGORY_SUCCESS, payload: data });
      }
    }, 500);
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCT_CATEGORY_FAIL, payload: error.response.data.message });
  }
};

// GET PRODUCT WITH SEARCH PARAMETERS
export const searchProduct = (searchParams) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCT_PROCESS });
  const { data } = await axios.get(`https://dummyjson.com/products?limit=100`);
  const filteredProducts = data.products.filter((product) => product.title.toLowerCase().includes(searchParams.toLowerCase()));
  if (filteredProducts.length !== 0) {
    dispatch({ type: SEARCH_PRODUCT_SUCCESS, payload: { filteredProducts, searchParams } });
  } else {
    dispatch({ type: SEARCH_PRODUCT_FAIL, payload: "No Product Found" });
  }
};

export const searchResult = (searchParams, category) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_RESULT_PROCESS });
    const { data } = await axios.get(`https://dummyjson.com/products?limit=100`);
    if (searchParams) {
      const filteredProducts = data.products.filter((product) => product.title.toLowerCase().includes(searchParams.toLowerCase()));
      dispatch({ type: SEARCH_RESULT_SUCCESS, payload: { filteredProducts, searchParams } });
    }
    if (category) {
      if (category === "all-categories") {
        const filteredProducts = data.products;
        dispatch({ type: SEARCH_RESULT_SUCCESS, payload: { filteredProducts, searchParams } });
      } else {
        const filteredProducts = data.products.filter((product) => product.category === category);
        dispatch({ type: SEARCH_RESULT_SUCCESS, payload: { filteredProducts, searchParams } });
      }
    }
  } catch (error) {
    dispatch({ type: SEARCH_RESULT_FAIL, payload: "No Product Found" });
  }
};
