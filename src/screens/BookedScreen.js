import React from "react";
import {PostList} from "../components/PostList";
import {useSelector} from "react-redux";

export const BookedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        const nameHeader =
            "Post #" + post.id + " from " + new Date(post.date).toLocaleDateString();

        navigation.navigate("Post", {
            postId: post.id,
            name: nameHeader,
            booked: post.booked,
        });
    };

    const bookedPosts = useSelector(state => state.post.bookedPosts)

    return (
        <PostList
            data={bookedPosts}
            onOpen={openPostHandler}
        />
    );
};
