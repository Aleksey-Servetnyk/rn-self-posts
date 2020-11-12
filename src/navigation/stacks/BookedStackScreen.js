import {createStackNavigator} from "@react-navigation/stack";
import {Platform} from "react-native";
import {THEME} from "../../theme";
import {BookedScreen} from "../../screens/BookedScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcons";
import {PostScreen} from "../../screens/PostScreen";
import * as React from "react";

export function BookedStackScreen({navigation}) {

    const BookedNavigator = createStackNavigator();

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
                            <Item title="Toggle Drawer" iconName="ios-menu"
                                  onPress={() => navigation.toggleDrawer()}/>
                        </HeaderButtons>
                    ),
                }}
            />
            <BookedNavigator.Screen
                name="Post"
                component={PostScreen}
                options={({route}) => ({
                    headerTitle: route.params.name,
                    headerRight: () => (

                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Star"
                                iconName={route.params.booked ? "ios-star" : "ios-star-outline"}
                                onPress={() => {
                                    route.params.toggleHandler(route.params.postId)
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </BookedNavigator.Navigator>
    );
}
