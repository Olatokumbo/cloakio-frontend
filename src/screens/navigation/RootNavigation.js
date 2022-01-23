import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/actions/actionTypes";
import { auth } from "../../config/firebase";

import GetStarted from "../GetStarted";
import Login from "../Login";
import MainNavigation from "./MainNavigation";

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const [loading, setLoading] = useState(false);
  const userAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(">>>>>>", user, "<<<<<<<");
      setLoading(true);
      if (user) {
        console.log("Signed in");
        setLoading(false);
        dispatch({
          type: actionTypes.SIGNIN_SUCCESS,
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
          refreshToken: user.refreshToken,
        });
      } else {
        console.log("Not Signed in");
        setLoading(false);
        dispatch({ type: actionTypes.SIGNOUT_SUCCESS });
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(userAuth.email && !loading) ? (
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
