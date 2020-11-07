import React from "react";
import {PostList} from "../components/PostList";
import {DATA} from "../data";

export const MainScreen = ({navigation}) => {
    console.log('Main Screen Nav: ' + navigation)
    const openPostHandler = (post) => {
        const nameHeader =
            "Post #" + post.id + " from " + new Date(post.date).toLocaleDateString();

        navigation.navigate("Post", {
            postId: post.id,
            name: nameHeader,
            booked: post.booked,
        });
    };

    return <PostList data={DATA} onOpen={openPostHandler}/>;
};
