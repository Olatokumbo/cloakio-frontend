import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./src/constants/global";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/redux/reducers";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import RootNavigation from "./src/screens/navigation/RootNavigation";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FBC12D",
    accent: "#f1c40f",
  },
};

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar
            backgroundColor={Colors.primary}
            style="light"
            translucent={true}
          />
          <RootNavigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
