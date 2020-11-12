import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../../theme";
import {PostStackScreen} from "../stacks/PostStackScreen";
import {BookedStackScreen} from "../stacks/BookedStackScreen";
import * as React from "react";

const BottomNavigator = createBottomTabNavigator();

export function BottomNav() {
    return (
        <BottomNavigator.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName = route.name === "Post" ? "ios-albums" : "ios-star";
                    return <Ionicons name={iconName} size={24} color={color}/>;
                },
                tabBarLabel: () => {
                    return route.name === "Post" ? "ALL" : "Favorites";
                },
            })}
            tabBarOptions={{
                activeTintColor: THEME.MAIN_COLOR,
                inactiveTintColor: "gray",
                size: 25,
            }}
        >
            <BottomNavigator.Screen name="Post" component={PostStackScreen}/>
            <BottomNavigator.Screen name="Booked" component={BookedStackScreen}/>
        </BottomNavigator.Navigator>
    );
}
