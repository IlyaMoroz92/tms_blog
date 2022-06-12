import { Postcard } from "../../components/Postcard";
import {  content } from '../../components/Postcard/content';
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { dataSlice, setData } from '../../redux/reducers/data';
import { useTheme } from '../../features/theme/useTheme'
import { usePosts } from '../../features/getPosts'
import { useParams } from "react-router-dom"
import { IPost } from '../../features/getPosts/postsSlice'
import { TitleNav } from '../../components/TitleNav'
import { Link } from 'react-router-dom'

export const PostPage: any = () => {
    const dispatch = useAppDispatch()

    const {posts, getPost, post} = usePosts()

    const { id } = useParams();
    const idPost = Number(id)

    useEffect(() => {
        getPost(idPost)
    }, [id])


    return (
        <div className="all__blog">
            <p>
                <Link  to='/'>Home</Link>
            </p>
            <Postcard
                title={post?.title}
                text={post?.text}
                image={post?.image}
                /* date={post?.date} */
                className='post'
                likeCount={post?.id}
                id={post?.id}
            />
        </div>
    );
}