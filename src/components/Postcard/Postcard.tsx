import { Button } from '../Button';
import { Date } from '../Date';
import { Footer } from '../Footer';
import { Title } from '../Title';
import { Article } from '../Article';
import { Likebar } from '../Likebar';
import { Picture } from '../Picture';
import './Postcard.scss'

type PostCardProps = {
    title?: string
    className?: string
    image?: string
    text?: string
    date?: string
    id?: number | undefined
    author?: string
    lesson_num?: number
}


export const Postcard = (props: PostCardProps) => {
    return (
        <div className={`postcard__container postcard__container--${props.className}`}>
            <div className={`postcard__content postcard__content--${props.className}`}>
                <div className={`postcard__textcontent postcard__textcontent--${props.className}`}>
                    <Date  date={props.date}/>
                    <Title  className={`postcard__title postcard__title--${props.className}`} text={props.title}/>
                    <Article text = {props.text}/>
                </div>
                <div className={`postcard__picture postcard__picture--${props.className}`}>
                    <Picture src={props.image} className={`postcard__img--${props.className}`}/>
                </div>
            </div>
            <Likebar/>
        </div>
    )
}
