import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isRedy, setIsRedy] = useState(false);

  if (!isRedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsRedy(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
