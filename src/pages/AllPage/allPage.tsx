import { Postcard } from "../../components/Postcard";
import {  content } from '../../components/Postcard/content';
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { dataSlice, setData } from '../../redux/reducers/data';
import { useTheme } from '../../features/theme/useTheme'


interface IPost {
    id?: number;
    image?: string;
    text?: string;
    date?: any;
    lesson_num?: number;
    title?: string;
    author?: number;
    like?: boolean;
    dislike?: boolean;
    favorit?: boolean;
    ind?: number
    likeCount?: number | undefined
}


export const AllPage: any = () => {

    const theme = useTheme()
    const data = useAppSelector(state => state.data.value)
    const dispatch = useAppDispatch()
    console.log(data)

    const allPosts = async () => {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=70')
            const responseFormat = await response.json();
            return responseFormat.results
    }

    useEffect(() => {
        if (data === null) {
            allPosts()
                .then((data: any) => {dispatch(setData(data))})
        }
    }, [])

    return (
        <div className="all__blog">
            {data?.map((el: IPost, ind: number) => {
                if(ind < 1) {
                    return (
                        <Postcard
                            key={ind}
                            title={el.title}
                            text={el.text}
                            image={el.image}
                            date={el.date}
                            className={`sizeL grid--${ind}`}
                            likeCount={el.id}
                        />
                    )} else if(ind < 5) {
                    return (
                        <Postcard 
                            key={ind}
                            title={el.title}
                            image={el.image}
                            date={el.date}
                            className={`sizeM grid--${ind}`}
                            likeCount={el.id}
                        />
                    )} else if(ind < 11) {
                    return (
                        <Postcard
                            key={ind}
                            title={el.title}
                            image={el.image}
                            date={el.date}
                            className={`sizeS grid--${ind}`}
                            likeCount={el.id}
                        />
                    )}
                }
                )}
        </div>
    );
}