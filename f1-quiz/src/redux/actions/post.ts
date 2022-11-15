import {ACTIONS} from "../constants";

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: ACTIONS.SET_IS_LOADING,
    isLoading,
  };
};


export const setShowLoadMore = (showLoadMore: boolean) => {
  return {
    type: ACTIONS.SET_SHOW_LOAD_MORE,
    showLoadMore,
  };
};