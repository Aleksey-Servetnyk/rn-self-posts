import React, {useEffect} from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    ScrollView,
    Alert
} from "react-native";
import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {removePost} from "../store/actions/post";

export const PostScreen = ({navigation, route}) => {
    const dispatch = useDispatch();

    const postId = route.params.postId;

    const post = useSelector(state => state.post.allPosts.find((p) => p.id === postId));

    const booked = useSelector(state =>
        state.post.bookedPosts.some(post => post.id === postId)
    )

    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])


    const removeHandler = () => {
        Alert.alert(
            "Deleting the post",
            "Are You sure?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete", style: "positive", onPress: () => {
                        navigation.navigate('Main')
                        dispatch(removePost(postId))
                    }
                },
            ],
            {cancelable: false}
        );
    };

    if (!post) {
        return null
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
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
