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
    like?: number
}

export const Likebar = (props: LikebarProps) => {
    /* const [text, setLike]= useState(0) */
    const [like, setLike] = useState(false)
    return (
        <div className= 'likebar'>
            <div className="likebar__left">
                <Button
                    icon={<Up />}
                    className={`likebar likebar__up--${props.className}`}
                    /* onClick={() => setLike(text+1)} */
                    onClick={() => setLike(true)}
                />
                {/* <p className={`likebar__counter likebar__counter--${props.className}`}>{text}</p> */}
                <p className={`likebar__counter likebar__counter--${props.className}`}>{props.like}</p>
                <Button
                    icon={<Down />}
                    className={`likebar likebar__down--${props.className}`}
                />
            </div>
            <div className="likebar__right">
                <Button
                    icon={<Bookmark />}
                    className={`likebar likebar__bookmark--${props.className}`}
                />
                <Button
                    icon={<More />}
                    className={`likebar likebar__more--${props.className}`}
                />
            </div>
        </div>
    )
}