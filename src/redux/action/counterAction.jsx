import { RESET_COUNT, INCREMENT, DECREMENT, HANDLE_ACTIVE, INCREMENT_BY_AMOUNT, HANDLE_SEARCH, HANDLE_CART, HANDLE_MENU, HANDLE_MODAL } from "../constant/counterType";

export const reset = () => ({
  type: RESET_COUNT,
});

export const increment = (product) => (dispatch, getState) => {
  const { count } = getState().counter;

  if (count < product.stock) {
    dispatch({ type: INCREMENT });
  }
};

export const decrement = () => (dispatch, getState) => {
  const { count } = getState().counter;

  if (count > 1) {
    dispatch({ type: DECREMENT });
  }
};

export const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});

export const handleCart = (state) => async (dispatch) => {
  dispatch({ type: HANDLE_CART, payload: state });
};

export const handleMenu = (state) => async (dispatch) => {
  dispatch({ type: HANDLE_MENU, payload: state });
};

export const handleActive = (state) => async (dispatch) => {
  dispatch({ type: HANDLE_ACTIVE, payload: state });
};

export const handleSearch = (state) => async (dispatch) => {
  dispatch({ type: HANDLE_SEARCH, payload: state });
};

export const handleModal = (state) => async (dispatch) => {
  dispatch({ type: HANDLE_MODAL, payload: state });
};
