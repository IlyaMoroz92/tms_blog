import { Postcard } from "../../components/Postcard";
import {  content } from '../../components/Postcard/content';
import { useState, useEffect } from 'react'


interface IPost {
    /* results?: any */
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
}


export const AllPage: any = () => {
    const [data, setData] = useState([])
    useEffect((): any => {
        const fetchData = async () => {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=70')
            const responseFormat = await response.json()
            setData(responseFormat.results)
        }
        fetchData()
    }, [])
    console.log(data)
    return (
        <div className="all__blog">
            {content.map((el: IPost, ind: number) => {
                    if(ind < 1) {
                        return (
                            <Postcard
                                key={ind}
                                title={el.title}
                                text={el.text}
                                image={el.image}
                                date={el.date}
                                className={`sizeL grid--${el.ind}`}
                            />
                        )} else if(ind < 5) {
                        return (
                            <Postcard 
                                key={ind}
                                title={el.title}
                                image={el.image}
                                date={el.date}
                                className={`sizeM grid--${ind}`}
                            />
                        )} else if(ind < 11) {
                        return (
                            <Postcard
                                key={ind}
                                title={el.title}
                                image={el.image}
                                date={el.date}
                                className={`sizeS grid--${ind}`}
                            />
                        )}
                    }
                )
            }
        </div>
    );
    
    /* return (
        <div className="all__blog">
            {content.map((el, ind) => {
                if(ind < 1) {
                return (
                    <Postcard
                        key={ind}
                        title={el.title}
                        text={el.text}
                        image={el.image}
                        date={el.date}
                        className={`sizeL grid--${ind}`}
                    />
                )} else if(ind < 5) {
                return (
                    <Postcard 
                        key={ind}
                        title={el.title}
                        image={el.image}
                        date={el.date}
                        className={`sizeM grid--${ind}`}
                    />
                )} else if(ind < 11) {
                return (
                    <Postcard
                        key={ind}
                        title={el.title}
                        image={el.image}
                        date={el.date}
                        className={`sizeS grid--${ind}`}
                    />
                )}
                }
            )}
        </div>
    ); */
}