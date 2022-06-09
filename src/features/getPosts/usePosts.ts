import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "./postsSlice";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(!posts) {
            dispatch(fetchPosts())
        }
    }, [])
    

    return {
        posts,
    }
}
