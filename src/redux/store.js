import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer/cartReducer";
import { loginReducer } from "./reducer/loginReducer";
import { counterReducer } from "./reducer/counterReducer";
import { historySearchReducer } from "./reducer/historyReducer";
import { getAllProductsReducer, getProductDetailReducer, getAllCategoriesReducer, getProductsDiscountReducer, productResultReducer, productSearchReducer } from "./reducer/productReducer";

const reducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  login: loginReducer,
  allProducts: getAllProductsReducer,
  detailProduct: getProductDetailReducer,
  allCategories: getAllCategoriesReducer,
  allDiscount: getProductsDiscountReducer,
  historySearch: historySearchReducer,
  productSearch: productSearchReducer,
  resultSearch: productResultReducer,
});

export const store = configureStore({ reducer, middleware: [thunk] });
