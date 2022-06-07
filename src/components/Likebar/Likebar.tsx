import { useState } from 'react'
import { Button } from '../Button';
import { ReactComponent as Down} from '../Button/img/Down.svg' 
import { ReactComponent as Bookmark} from '../Button/img/Bookmark.svg' 
import { ReactComponent as Up} from '../Button/img/Up.svg' 
import { ReactComponent as More} from '../Button/img/More.svg' 
import './Likebar.scss'
import { useDispatch, useSelector } from "react-redux"
import { setBookmark, setDislike, setLike } from '../../redux/reducers/likebar'
import { useAppSelector } from '../../redux/hooks';


type LikebarProps = {
    id?: any
    className?: string
    onClick?: number
    bookmarkActive?: boolean
    likeActive?: boolean
    dislikeActive?: boolean
    likeCount?: number
}

export const Likebar = (props: LikebarProps) => {

    
    const dispatch = useDispatch()
    
    function bookmarkID() {
        console.log(props)
        dispatch(setBookmark(props.id))
    }

    function dislikeID() {
        dispatch(setDislike(props.id))
    }

    function likeID() {
        dispatch(setLike(props.id))
    }

    return (
        <div className= 'likebar'>
            <div className="likebar__left">
                <Button
                    icon={<Up />}
                    className={`likebar likebar__up--${props.className}`}
                    /* onClick={() => setLike(text+1)} */
                    onClick={likeID}
                />
                {/* <p className={`likebar__counter likebar__counter--${props.className}`}>{text}</p> */}
                <p className={`likebar__counter likebar__counter--${props.className}`}>{props.likeCount}</p>
                <Button
                    icon={<Down />}
                    className={`likebar likebar__down--${props.className}`}
                    onClick={dislikeID}
                />
            </div>
            <div className="likebar__right">
                <Button
                    icon={<Bookmark />}
                    className={`likebar likebar__bookmark--${props.className}`}
                    onClick={bookmarkID}
                />
                <Button
                    icon={<More />}
                    className={`likebar likebar__more--${props.className}`}
                />
            </div>
        </div>
    )
}