import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
              <Item
                title="Take photo"
                iconName="ios-camera"
                // onPress={() => console.log("Press photo")}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                // onPress={() => console.log("Press Drawer")}
              />
            </HeaderButtons>
          ),
        }}
      />
      
      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
          // headerStyle: route.params.headerStyle,
          headerRight: () => (
            // console.log(route),
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Star"
                iconName={route.params.booked ? "ios-star" : "ios-star-outline"}
                // onPress={() => console.log("Press photo")}
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
      <BookedNavigator.Screen name="Booked" component={BookedScreen} />
      <BookedNavigator.Screen name="Post" component={PostScreen} />
    </BookedNavigator.Navigator>
  );
}

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === "Post" ? "ios-albums" : "ios-star";
            return <Ionicons name={iconName} size={size} color={color} />;
            initS
          },
        })}
        tabBarOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          inactiveTintColor: "gray",
          size: 25
        }}
      >
        <BottomNavigator.Screen
          name="Post"
          component={PostStackScreen}
        />
        
        <BottomNavigator.Screen
          name="Booked"
          component={BookedStackScreen}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
};
