import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import {BottomNav} from "./navigators/BottomNav";
import {BottomNavAndroid} from "./navigators/BottomNavAndroid";

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      {Platform.OS === "android" ? <BottomNavAndroid /> : <BottomNav />}
    </NavigationContainer>
  );
};
