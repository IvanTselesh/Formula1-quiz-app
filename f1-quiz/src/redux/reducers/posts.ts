import {ACTIONS} from "../constants";
import {ReducerAction, SetStateAction} from "react";



export const initialState = {
  isLoading: true,
  showLoadMore: false
}

export const postsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ACTIONS.SET_SHOW_LOAD_MORE: {

    }
    case ACTIONS.SET_IS_LOADING: {

    }
  }
}