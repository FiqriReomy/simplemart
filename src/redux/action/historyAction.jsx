import { GET_LAST_SEEN, SAVE_SEARCH_HISTORY, REMOVE_ALL_SEARCH_HISTORY, REMOVE_SINGLE_SEARCH_HISTORY, ADD_LAST_SEEN } from "../constant/historyType";

export const getLastSeen = () => async (dispatch) => {
  dispatch({ type: GET_LAST_SEEN });
};

export const saveHistory = (params) => async (dispatch) => {
  dispatch({ type: SAVE_SEARCH_HISTORY, payload: params });
};

export const removeAllHistory = () => async (dispatch) => {
  dispatch({ type: REMOVE_ALL_SEARCH_HISTORY });
};

export const removeSingleHistory = (index) => async (dispatch) => {
  dispatch({ type: REMOVE_SINGLE_SEARCH_HISTORY, payload: index });
};

export const addLastSeen = (product) => async (dispatch) => {
  dispatch({ type: ADD_LAST_SEEN, payload: product });
};
