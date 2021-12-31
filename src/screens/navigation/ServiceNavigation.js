import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home/Home";
import ServiceInfo from "../ServiceInfo/ServiceInfo"
import { Colors } from "../../constants/global";

const Stack = createNativeStackNavigator();

export default function ServiceNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Service Info"
        component={ServiceInfo}

        options={{
          title: "",
          navigationOptions: {
            headerShown: false,
            
          },
          headerStyle: {
            backgroundColor: Colors.primary,
            
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}