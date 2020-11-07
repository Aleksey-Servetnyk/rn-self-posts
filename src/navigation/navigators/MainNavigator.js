import { createDrawerNavigator } from '@react-navigation/drawer'
import React from "react";
import {BottomNavigator} from "./BottomNavigator";
import {AboutStackScreen} from "../stacks/AboutStackScreen";
import {CreateStackScreen} from "../stacks/CreateStackScreen";

const Drawer = createDrawerNavigator();

export function MainNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="PostTabs"
                component={BottomNavigator}
                options={{
                    drawerLabel: 'Main Page'
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutStackScreen}
                options={{
                    drawerLabel: 'About us'
                }}
            />
            <Drawer.Screen
                name="Create"
                component={CreateStackScreen}
                options={{
                    drawerLabel: 'New Post'
                }}
            />
        </Drawer.Navigator>
    )
}
