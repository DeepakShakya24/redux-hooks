import { createStore } from "redux";
// import { bankingReducer } from "./reducers/bankingReducers";
import { rootReducer } from "./reducers";
const store = createStore(rootReducer);
export default store;
