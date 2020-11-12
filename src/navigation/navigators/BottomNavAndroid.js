import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {THEME} from "../../theme";
import {Ionicons} from "@expo/vector-icons";
import {PostStackScreen} from "../stacks/PostStackScreen";
import {BookedStackScreen} from "../stacks/BookedStackScreen";
import * as React from "react";

const BottomNavigatorAndroid = createMaterialBottomTabNavigator();

export function BottomNavAndroid() {
    return (
        <BottomNavigatorAndroid.Navigator
            shifting={true}
            tabBarColor={THEME.MAIN_COLOR}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName = route.name === "Post" ? "ios-albums" : "ios-star";
                    return <Ionicons name={iconName} size={24} color={color}/>;
                },
            })}
        >
            <BottomNavigatorAndroid.Screen
                name="Post"
                component={PostStackScreen}
                options={{tabBarLabel: "ALL"}}
            />
            <BottomNavigatorAndroid.Screen
                name="Booked"
                component={BookedStackScreen}
                options={{tabBarLabel: "Favorites"}}
            />
        </BottomNavigatorAndroid.Navigator>
    );
}
