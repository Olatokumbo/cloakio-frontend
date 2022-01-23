import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import GetStarted from "../GetStarted";
import Login from "../Login";
import MainNavigation from "./MainNavigation";
import useAuth from "../../hooks/auth";

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const userAuth = useSelector((state) => state.auth);
  const loading = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userAuth.email && !loading ? (
          <Stack.Screen
            options={{
              header: () => null,
              navigationOptions: {
                headerShown: false,
              },
            }}
            name="Home"
            component={MainNavigation}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
