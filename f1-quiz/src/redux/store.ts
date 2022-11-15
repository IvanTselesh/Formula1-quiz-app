import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {postsReducer} from "./reducers/posts";

export let store = createStore(
  postsReducer,
  composeWithDevTools(applyMiddleware(thunk))
)