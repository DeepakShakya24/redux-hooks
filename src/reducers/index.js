import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bankingReducer } from "./bankingReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer,
});

// const store = {
//   auth: {
//     isloggedIn: false,
//   },
//   banking: {
//     balance: 0,
//     isSavingAccount: false,
//   },
// };
