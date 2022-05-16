import { useState } from 'react'
import { Button } from '../Button';
import { ReactComponent as Down} from '../Button/img/Down.svg' 
import { ReactComponent as Bookmark} from '../Button/img/Bookmark.svg' 
import { ReactComponent as Up} from '../Button/img/Up.svg' 
import { ReactComponent as More} from '../Button/img/More.svg' 
import './Likebar.scss'

type LikebarProps = {
    className?: string
    onClick?: number
}

export const Likebar = (props: LikebarProps) => {
    const [text, setLike]= useState(0)
    return (
        <div className= 'likebar'>
            <div className="left">
                <Button
                    icon={<Up />}
                    className={`likebar__button likebar__button_like--${props.className}`}
                    onClick={() => setLike(text+1)}
                />
                <span className={`likebar__counter likebar__counter--${props.className}`}>{text}</span>
                <Button
                    icon={<Down />}
                    className={`likebar__button likebar__button_dislike--${props.className}`}
                />
                {/* <button className='likebar__button buttonLikeUp'><img src={LikeUpBlack} alt="" onClick={() => setLike(text+1)}/> <span className="spanText">{text}</span></button>
                <button className='likebar__button buttonLikeDown'><img src={LikeDownBlack} alt="" /></button> */}
            </div>
            <div className="right">
                <Button
                    icon={<Bookmark />}
                    className={`likebar__button likebar__button_bookmark--${props.className}`}
                />
                <Button
                    icon={<More />}
                    className={`likebar__button likebar__button_more--${props.className}`}
                />
            </div>
        </div>
    )
}