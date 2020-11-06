import React from 'react'
import {Platform} from "react-native";
import {BottomNavAndroid} from "./BottomNavAndroid";
import {BottomNav} from "./BottomNav";

export function BottomNavigator() {
    return (
        Platform.OS === "android" ? <BottomNavAndroid /> : <BottomNav />
    )
}