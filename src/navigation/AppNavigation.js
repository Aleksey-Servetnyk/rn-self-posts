import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcons";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerTitle: "My own blog",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="Take photo"
                  iconName="ios-camera"
                  onPress={() => console.log("Press photo")}
                />
              </HeaderButtons>
            ),
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ route }) => ({
            headerTitle: route.params.name,
            // headerStyle: route.params.headerStyle,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
