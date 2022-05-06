import './PostCardMicro.css'
import { Likes } from '../Likes/Likes'
import { Picture } from '../Picture/Picture'
import { Date } from '../Date/Date'
import { Title } from '../Title/Title'
import PicturePostCardMicro from './img/PostCardMicro.svg'


type PostCardMicroProps = {
    className?: string
    image?: string
    
}

export const PostCardMicro = (props: PostCardMicroProps) => {
    return (
        <div className='mainDivPostCardMicro'>
            <div className="mainContentPostCardMicro">
                <div className="mainTextPostCardMicro">
                    <Date  text={'April 20, 2021'}/>
                    <Title  className='titlePostCardMicro' text={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
                </div>
                <div className="mainPicturePostCardMicro">
                    <Picture image = {PicturePostCardMicro}/>
                </div>
            </div>
            <Likes/>
        </div>
    )
}