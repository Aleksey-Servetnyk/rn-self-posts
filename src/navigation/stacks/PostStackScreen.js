import React from "react";
import {Platform} from "react-native";
import {THEME} from "../../theme";
import {MainScreen} from "../../screens/MainScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcons";
import {PostScreen} from "../../screens/PostScreen";
import {createStackNavigator} from "@react-navigation/stack";

export function PostStackScreen({navigation}) {

    const PostNavigator = createStackNavigator();

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
                                onPress={() => navigation.navigate('Create')}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toggle Drawer"
                                  iconName="ios-menu"
                                  onPress={() => navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
                }}
            />

            <PostNavigator.Screen
                name="Post"
                component={PostScreen}
                options={({route}) => ({
                    headerTitle: route.params.name,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Star"
                                iconName={route.params.post.booked ? "ios-star" : "ios-star-outline"}
                                onPress={() => {
                                    route.params.toggleHandler(route.params.post.id)
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </PostNavigator.Navigator>
    );
}
