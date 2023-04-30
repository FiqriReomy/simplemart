import { GET_LAST_SEEN, SAVE_SEARCH_HISTORY, REMOVE_ALL_SEARCH_HISTORY, REMOVE_SINGLE_SEARCH_HISTORY, ADD_LAST_SEEN } from "../constant/historyType";
import Cookies from "js-cookie";

const searchHistory = Cookies.get("searchHistory");

const historySearchInitialState = {
  prevSearch: [],
  lastSeen: [],
};

if (searchHistory) {
  const { prevSearch, lastSeen } = JSON.parse(searchHistory);
  historySearchInitialState.prevSearch = prevSearch;
  historySearchInitialState.lastSeen = lastSeen;
}

export const historySearchReducer = (state = historySearchInitialState, action) => {
  switch (action.type) {
    case GET_LAST_SEEN:
      return {
        lastSeen: state.lastSeen,
      };
    case ADD_LAST_SEEN:
      const newLastSeen = action.payload;
      const lastSeen = [...state.lastSeen.slice(-4), newLastSeen];
      const updatedState = {
        ...state,
        lastSeen,
      };
      Cookies.set("searchHistory", JSON.stringify(updatedState), { expires: 7 });
      return updatedState;
    case SAVE_SEARCH_HISTORY:
      const newSearch = action.payload;
      const prevSearch = [...state.prevSearch.slice(-4), newSearch];
      const newState = {
        ...state,
        prevSearch,
      };
      Cookies.set("searchHistory", JSON.stringify(newState), { expires: 7 });
      return newState;
    case REMOVE_ALL_SEARCH_HISTORY:
      Cookies.remove("searchHistory");
      return {
        prevSearch: [],
        lastSeen: [],
      };
    case REMOVE_SINGLE_SEARCH_HISTORY:
      const prevSearchCopy = [...state.prevSearch];
      prevSearchCopy.splice(action.payload, 1);
      const updatedState2 = {
        ...state,
        prevSearch: prevSearchCopy,
      };
      Cookies.set("searchHistory", JSON.stringify(updatedState2), { expires: 7 });
      return updatedState2;
    default:
      return state;
  }
};
