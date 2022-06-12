import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts, fetchPost, likePost, dislikePost, bookmarkPost } from "./postsSlice";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    
    const post = useAppSelector( state => state.posts.post)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(!posts) {
            dispatch(fetchPosts())
        }
    }, [])
    
    const getPost = (id: number) => {
        dispatch(fetchPost(id))
    }

    const onLikePost = (id: number) => {
        dispatch(likePost(id))
    }

    const onDislikePost = (id: number) => {
        dispatch(dislikePost(id))
    }

    const onBookmarkPost = (id: number) => {
        dispatch(bookmarkPost(id))
    }

    const statePost = (id: number) => {
        return posts?.find(post => post.id === id)
    }

    return {
        posts,
        fetchPosts,
        getPost,
        post,
        onLikePost,
        onDislikePost,
        onBookmarkPost,
        statePost,
    }
}
