import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerTitle: "My own blog" }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
        //   options={{ headerTitle: "Post #42" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
