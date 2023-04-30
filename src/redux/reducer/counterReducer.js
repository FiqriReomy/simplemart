import { RESET_COUNT, INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT, HANDLE_CART, HANDLE_MENU, HANDLE_SEARCH, HANDLE_ACTIVE, HANDLE_MODAL } from "../constant/counterType";

const initialState = {
  count: 1,
  active: false,
  openMenu: false,
  openCart: false,
  openSearch: false,
  openModal: false,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_COUNT:
      return {
        ...state,
        count: 1,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 1 ? state.count - 1 : state.count,
      };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case HANDLE_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case HANDLE_CART:
      return {
        ...state,
        openCart: action.payload,
      };
    case HANDLE_MENU:
      return {
        ...state,
        openMenu: action.payload,
      };
    case HANDLE_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        openSearch: action.payload,
      };
    default:
      return state;
  }
};
