import './PostCard.css'
import { Likes } from '../Likes/Likes'
import { Article } from '../Article/Article'
import { Picture } from '../Picture/Picture'
import { Date } from '../Date/Date'
import { Title } from '../Title/Title'
import Picture1 from './img/Rectangle39.svg'


type PostCardProps = {
    className?: string
    image?: string
}

export const PostCard = (props: PostCardProps) => {
    return (
        <div className='mainDivPostCard'>
            <div className="mainContentPostCard">
                <div className="mainTextPostCard">
                    <Date  text={'April 20, 2021'}/>
                    <Title  className='titlePostCard' text={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
                    <Article text = 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for  a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'/>
                </div>
                <div className="mainPicturePostCard">
                    <Picture image = {Picture1}/>
                </div>
            </div>
            <Likes/>
        </div>
    )
}