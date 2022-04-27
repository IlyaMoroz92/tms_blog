import './PostCardMin.css'
import { Likes } from '../Likes/Likes'
import { Picture } from '../Picture/Picture'
import { Date } from '../Date/Date'
import { Title } from '../Title/Title'
import PicturePostCardMin from './img/PostCardMin.svg'


type PostCardMinProps = {
    className?: string
    image?: string
}

export const PostCardMin = (props: PostCardMinProps) => {
    return (
        <div className='mainDivPostCardMin'>
            <div className="mainContentPostCardMin">
                <div className="mainPicturePostCardMin">
                    <Picture image = {PicturePostCardMin}/>
                </div>
                <div className="mainTextPostCardMin">
                    <Date  text={'April 20, 2021'}/>
                    <Title className='titlePostCardMin' text={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
                </div>
            </div>
            <Likes/>
        </div>
    )
}