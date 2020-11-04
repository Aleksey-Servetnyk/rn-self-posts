import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    //console.log(navigation)
    navigation.navigate("Post", {
      name: "Custom Post Header",
      // headerStyle: {
      //   backgroundColor: "red",
      // },
    });
  };

  return (
    <View styles={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
