import { useState } from 'react'
import './Likes.css'
import LikeDownBlack from './img/LikeDownBlack.svg'
import LikeUpBlack from './img/LikeUpBlack.svg'
import IconBlack from './img/IconBlack.svg'
import More from './img/More.svg'

type LikesProps = {
    className?: string
    onClick?: number
}

export const Likes = (props: LikesProps) => {
    const [text, setLike]= useState(0)
    return (
        <div className= 'divLikes'>
            <div className="left">
                <button className='buttonLike buttonLikeUp'><img src={LikeUpBlack} alt="" onClick={() => setLike(text+1)}/> <span className="spanText">{text}</span></button>
                <button className='buttonLike buttonLikeDown'><img src={LikeDownBlack} alt="" /></button>
            </div>
            <div className="right">
                <button className='buttonLike'><img src={IconBlack} alt="" /></button>
                <button className='buttonLike'><img src={More} alt="" /></button>
            </div>
        </div>
    )
}