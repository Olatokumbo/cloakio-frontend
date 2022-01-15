import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   whitelist: ["bookmarks"],
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(persistConfig, authReducer),
// });

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
