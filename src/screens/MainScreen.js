import React, {useEffect} from "react";
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, toggleBooked} from "../store/actions/post";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {THEME} from "../theme";

export const MainScreen = ({navigation}) => {

    const openPostHandler = (post) => {

        const toggleHandler = () => {
            dispatch(toggleBooked(post))
        }

        const nameHeader =
            "Post #" + post.id + " from " + new Date(post.date).toLocaleDateString();

        navigation.navigate("Post", {
            post: post,
            postId: post.id,
            name: nameHeader,
            toggleHandler: toggleHandler
        });
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)

    if (loading) {
        return <View style={styles.center}>
            <ActivityIndicator color={THEME.MAIN_COLOR}/>
        </View>
    }

    return <PostList
        data={allPosts}
        onOpen={openPostHandler}
    />;
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

