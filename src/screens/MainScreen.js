import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Post } from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    //console.log(navigation)

    const nameHeader =
      "Post #" + post.id + " from " + new Date(post.date).toLocaleDateString();

    navigation.navigate(
      "Post",
      {
        postId: post.id,
        name: nameHeader,
      }
      // headerStyle: {
      //   backgroundColor: "red",
      // },
    );
  };

  return (
    <View styles={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
