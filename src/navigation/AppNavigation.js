import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcons";
import { Ionicons } from "@expo/vector-icons";

const PostNavigator = createStackNavigator();
const BookedNavigator = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();
const BottomNavigatorAndroid = createMaterialBottomTabNavigator();

function PostStackScreen() {
  return (
    <PostNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
      }}
    >
      <PostNavigator.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTitle: "My own blog",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item title="Take photo" iconName="ios-camera" />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item title="Toggle Drawer" iconName="ios-menu" />
            </HeaderButtons>
          ),
        }}
      />

      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Star"
                iconName={route.params.booked ? "ios-star" : "ios-star-outline"}
              />
            </HeaderButtons>
          ),
        })}
      />
    </PostNavigator.Navigator>
  );
}

function BookedStackScreen() {
  return (
    <BookedNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
      }}
    >
      <BookedNavigator.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          headerTitle: "Favorites posts",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item title="Toggle Drawer" iconName="ios-menu" />
            </HeaderButtons>
          ),
        }}
      />
      <BookedNavigator.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Star"
                iconName={route.params.booked ? "ios-star" : "ios-star-outline"}
              />
            </HeaderButtons>
          ),
        })}
      />
    </BookedNavigator.Navigator>
  );
}

function BottomNav() {
  return (
    <BottomNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Post" ? "ios-albums" : "ios-star";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => {
          return route.name === "Post" ? "ALL" : "Favorites";
        },
      })}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        inactiveTintColor: "gray",
      }}
    >
      <BottomNavigator.Screen name="Post" component={PostStackScreen} />
      <BottomNavigator.Screen name="Booked" component={BookedStackScreen} />
    </BottomNavigator.Navigator>
  );
};

const BottomNavAndroid = () => {
  return (
    <BottomNavigatorAndroid.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Post" ? "ios-albums" : "ios-star";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => {
          return route.name === "Post" ? "ALL" : "Favorites";
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "gray",
      }}
    >
      <BottomNavigator.Screen name="Post" component={PostStackScreen} />
      <BottomNavigator.Screen name="Booked" component={BookedStackScreen} />
    </BottomNavigatorAndroid.Navigator>
  );
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
    <BottomNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Post" ? "ios-albums" : "ios-star";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => {
          return route.name === "Post" ? "ALL" : "Favorites";
        },
      })}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        inactiveTintColor: "gray",
      }}
    >
      <BottomNavigator.Screen name="Post" component={PostStackScreen} />
      <BottomNavigator.Screen name="Booked" component={BookedStackScreen} />
    </BottomNavigator.Navigator>      {/* {Platform.OS === "android" ? <BottomNav /> : <BottomNav />} */}
    </NavigationContainer>
  );
};
