import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  ScrollView,
  Alert
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ route, navigation }) => {
  const postId = route.params.postId;

  const post = DATA.find((p) => p.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Deleting the post",
      "Are You sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", style: "positive", onPress: () => {} },
      ],
      { cancelable: false }
    );
  };
  //console.log({ navigation }, { postId }, {route});
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
