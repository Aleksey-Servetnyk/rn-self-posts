import React, {useEffect} from "react";
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts, toggleBooked} from "../store/actions/post";

export const BookedScreen = ({navigation}) => {

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
            //booked: post.booked,
            toggleHandler: toggleHandler
        });
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])


    const bookedPosts = useSelector(state => state.post.bookedPosts)

    return (
        <PostList
            data={bookedPosts}
            onOpen={openPostHandler}
        />
    );
};
