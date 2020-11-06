import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import {BottomNav} from "./navigators/BottomNav";
import {BottomNavAndroid} from "./navigators/BottomNavAndroid";
import {BottomNavigator} from "./navigators/BottomNavigator";

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};
