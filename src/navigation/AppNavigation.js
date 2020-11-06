import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {MainNavigator} from "./navigators/MainNavigator";

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
