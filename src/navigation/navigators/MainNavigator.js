import { createDrawerNavigator } from '@react-navigation/drawer'
import React from "react";
import {BottomNav} from "./BottomNav";
import {AboutScreen} from "../../screens/AboutScreen";
import {CreateScreen} from "../../screens/CreateScreen";

const Drawer = createDrawerNavigator();

export function MainNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="PostTabs" component={BottomNav} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Create" component={CreateScreen} />
        </Drawer.Navigator>
    )
}
