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

const productInitialState = {
  products: [],
  product: {},
  discounts: [],
  categories: [],
  total: "",
  loading: false,
  success: false,
  error: false,
};

export const getAllProductsReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_PROCESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_ALL_PRODUCT_SUCCESS:
      const newProducts = action.payload.products;
      const total = action.payload.total;

      return {
        ...state,
        loading: false,
        total: total,
        products: newProducts,
      };
    case GET_ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getProductsDiscountReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DISCOUNT_PROCESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_PRODUCT_DISCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        discounts: action.payload.products,
      };
    case GET_PRODUCT_DISCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getProductDetailReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_PROCESS:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

// GET ALL PRODUCT CATEGORIES
export const getAllCategoriesReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_PROCESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_ALL_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// PRODUCT SEARCH FILTER
export const productSearchReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_PROCESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.filteredProducts,
      };
    case SEARCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// PRODUCT SEARCH RESULT
export const productResultReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT_PROCESS:
      return {
        ...state,
        loading: true,
        error: false,
        products: [],
      };
    case SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.filteredProducts,
      };
    case SEARCH_RESULT_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
