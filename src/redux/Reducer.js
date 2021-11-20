import { combineReducers, createStore } from "redux";
import { BTThayKinhReducer } from "./reducers/BTThayKinhReducer";

const rootReducer = combineReducers({
  BTThayKinhReducer: BTThayKinhReducer,
});

export const store = createStore(rootReducer);
