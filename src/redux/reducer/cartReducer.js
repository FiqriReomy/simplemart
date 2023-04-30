import { RESET_CART, GET_CART_PROCESS, ADD_CART_PROCESS, REMOVE_CART_PROCESS, GET_CART_SUCCESS, ADD_CART_SUCCESS, REMOVE_CART_SUCCESS, INCREMENT_CART_SUCCESS, DECREMENT_CART_SUCCESS } from "../constant/cartType";
import Cookies from "js-cookie";

const cartData = Cookies.get("cartData");

const cartInitialState = {
  loading: false,
  add_loading: false,
  cart: cartData ? JSON.parse(cartData) : [],
  success: false,
  error: false,
};

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case RESET_CART:
      return {
        ...state,
        error: false,
        success: false,
      };
    case GET_CART_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case ADD_CART_PROCESS:
      return {
        ...state,
        add_loading: true,
      };
    case REMOVE_CART_PROCESS:
      return {
        ...state,
        success: false,
        loading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ADD_CART_SUCCESS:
      const product = action.payload.product;
      const amount = action.payload.count;
      const productStock = product.stock;
      const index = state.cart.findIndex((item) => item.data.id === product.id);
      const totalAmount = index !== -1 ? state.cart[index].amount + 1 : 1;

      if (totalAmount > productStock) {
        return {
          ...state,
          error: true,
          add_loading: false,
        };
      }

      if (index !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[index].amount += amount;

        const updatedState = {
          ...state,
          cart: updatedCart,
        };

        Cookies.set("cartData", JSON.stringify(updatedState.cart), { expires: 7 });

        return {
          ...updatedState,
          add_loading: false,
          success: true,
        };
      } else {
        const updatedState = {
          ...state,
          success: true,
          cart: [...state.cart, { data: product, amount }],
        };

        Cookies.set("cartData", JSON.stringify(updatedState.cart), { expires: 7 });

        return {
          ...updatedState,
          add_loading: false,
        };
      }
    case INCREMENT_CART_SUCCESS:
      const updateProduct = action.payload.product;
      const updateAmount = action.payload.count;
      const stock = updateProduct.stock;
      const indexCart = state.cart.findIndex((item) => item.data.id === updateProduct.id);
      const totalCart = state.cart[indexCart].amount;
      if (totalCart + updateAmount > stock) {
        return {
          ...state,
          error: true,
          loading: false,
        };
      } else {
        console.log("masuk pak eko jelas sekali");
        const updatedCart = [...state.cart];
        updatedCart[indexCart].amount += updateAmount;
        const updatedState = {
          ...state,
          cart: updatedCart,
        };

        Cookies.set("cartData", JSON.stringify(updatedState.cart), { expires: 7 });

        return {
          ...updatedState,
          loading: false,
          success: true,
        };
      }

    case REMOVE_CART_SUCCESS:
      const productId = action.payload.data.id;
      const updatedCart = state.cart.filter((item) => item.data.id !== productId);
      const updatedState = {
        ...state,
        cart: updatedCart,
      };
      Cookies.set("cartData", JSON.stringify(updatedState.cart), { expires: 7 });
      return {
        ...updatedState,
        loading: false,
      };
    default:
      return state;
  }
};
