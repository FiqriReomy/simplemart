import { RESET_CART, GET_CART_PROCESS, ADD_CART_PROCESS, REMOVE_CART_PROCESS, GET_CART_SUCCESS, ADD_CART_SUCCESS, REMOVE_CART_SUCCESS, UPDATE_CART_PROCESS, INCREMENT_CART_SUCCESS, DECREMENT_CART_SUCCESS } from "../constant/cartType";

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_PROCESS });
  setTimeout(() => {
    dispatch({ type: GET_CART_SUCCESS });
  }, 500);
};

export const addCart = (cartItem) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CART_PROCESS });
    setTimeout(() => {
      dispatch({ type: ADD_CART_SUCCESS, payload: cartItem });
    }, 500);
    setTimeout(() => {
      dispatch({ type: RESET_CART });
    }, 500);
  } catch (error) {}
};

export const updateCart = (product, count) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_PROCESS });
    setTimeout(() => {
      dispatch({ type: INCREMENT_CART_SUCCESS, payload: { product, count } });
    }, 500);
    setTimeout(() => {
      dispatch({ type: RESET_CART });
    }, 500);
  } catch (error) {
    console.log(error);
  }
};

export const removeCart = (cartItem) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_CART_PROCESS });
    setTimeout(() => {
      dispatch({ type: REMOVE_CART_SUCCESS, payload: cartItem });
    }, 500);
  } catch (error) {}
};
