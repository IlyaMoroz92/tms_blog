import './PostCardNew.scss'
import { Likes } from '../Likes/Likes'
import { Article } from '../Article/Article'
import { Picture } from '../Picture/Picture'
import { Date } from '../Date/Date'
import { Title } from '../Title/Title'
import Picture1 from './img/Rectangle39.svg'


type PostCardNewProps = {
    title?: string
    className?: string
    image?: string
    text?: string
    date?: string
    id?: number | undefined
    author?: string
    lesson_num?: number
}

export const PostCardNew = (props: PostCardNewProps) => {
    return (
        <div className={`postcard__div postcard__div--${props.className}`}>
            <div className={`postcard__content postcard__content--${props.className}`}>
                <div className={`postcard__textcontent postcard__textcontent--${props.className}`}>
                    <Date  text={props.date}/>
                    <Title  className={`postcard__title postcard__title--${props.className}`} text={props.title}/>
                    <Article text = {props.text}/>
                </div>
                <div className={`postcard__picture postcard__picture--${props.className}`}>
                    <Picture image = {props.image} className={`postcard__img postcard__img--${props.className}`}/>
                </div>
            </div>
            <Likes/>
        </div>
    )
}