import './PostCardNew.css'
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
}

export const PostCardNew = (props: PostCardNewProps) => {
    return (
        <div className={`postcard__div postcard__div--${props.className}`}>
            <div className="postcard__content">
                <div className="postcard__textcontent">
                    <Date  text={props.date}/>
                    <Title  className='postcard__title' text={props.title}/>
                    <Article text = {props.text}/>
                </div>
                <div className="postcard__picture">
                    <Picture image = {props.image} className='postcard__img'/>
                </div>
            </div>
            <Likes/>
        </div>
    )
}