import {createStackNavigator} from "@react-navigation/stack";
import {Platform} from "react-native";
import {THEME} from "../../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcons";
import * as React from "react";
import {AboutScreen} from "../../screens/AboutScreen";


const AboutNavigator = createStackNavigator();

export function AboutStackScreen({navigation}) {
    return (
        <AboutNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:
                        Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                },
                headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
            }}
        >
            <AboutNavigator.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerTitle: "About us",
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toggle Drawer" iconName="ios-menu"
                                  onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>
                    ),
                }}
            />
        </AboutNavigator.Navigator>
    );
}
