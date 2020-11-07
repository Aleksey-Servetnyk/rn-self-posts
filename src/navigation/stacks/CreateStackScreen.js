import {createStackNavigator} from "@react-navigation/stack";
import {Platform} from "react-native";
import {THEME} from "../../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcons";
import * as React from "react";
import {CreateScreen} from "../../screens/CreateScreen";


const CreateNavigator = createStackNavigator();

export function CreateStackScreen({navigation}) {
    return (
        <CreateNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:
                        Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                },
                headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
            }}
        >
            <CreateNavigator.Screen
                name="Create"
                component={CreateScreen}
                options={{
                    headerTitle: "Creating Post",
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toggle Drawer" iconName="ios-menu"
                                  onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>
                    ),
                }}
            />
        </CreateNavigator.Navigator>
    );
}
