import { createContext, useReducer } from "react";
import authReducer, { authInitialState } from "./reducers/authReducer";

export const AppContext = createContext();
AppContext.displayName = "Auth";

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
