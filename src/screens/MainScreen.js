import React, {useEffect} from "react";
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, toggleBooked} from "../store/actions/post";

export const MainScreen = ({navigation}) => {

    const openPostHandler = (post) => {
        const postId = post.id

        const toggleHandler = () => {
            dispatch(toggleBooked(postId))
        }

        const nameHeader =
            "Post #" + post.id + " from " + new Date(post.date).toLocaleDateString();

        navigation.navigate("Post", {
            postId: post.id,
            name: nameHeader,
            booked: post.booked,
            toggleHandler: toggleHandler
        });
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)

    return <PostList
        data={allPosts}
        onOpen={openPostHandler}
    />;
};
