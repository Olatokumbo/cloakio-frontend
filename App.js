import GetStarted from "./src/screens/GetStarted/GetStarted";
import Login from "./src/screens/Login/Login";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home/Home";
import MainNavigation from "./src/screens/navigation/MainNavigation";
import { Colors } from "./src/constants/global";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FBC12D",
    accent: "#f1c40f",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={Colors.primary} style="light" translucent={true} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="GetStarted"
            component={GetStarted}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              header: () => null,
              navigationOptions: {
                headerShown: false,
              }}}
            name="Home"
            component={MainNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
