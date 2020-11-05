import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostScreen = ({ route, navigation }) => {
  const postId  = route.params.postId;
  //console.log({ navigation }, { postId }, {route});
  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
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
