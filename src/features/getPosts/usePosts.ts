import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts, fetchPost } from "./postsSlice";

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

    return {
        posts,
        fetchPosts,
        getPost,
        post,
    }
}
