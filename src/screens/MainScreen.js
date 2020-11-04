import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    //console.log(navigation)
    navigation.navigate("Post", {name: 'Custom Post Header'});
  };

  return (
    <View style={styles.center}>
      <Text>Main Screen</Text>
      <Button title="Go to Post" onPress={goToPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
