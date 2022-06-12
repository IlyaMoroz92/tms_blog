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
import { usePosts } from '../../features/getPosts';



/* type LikebarProps = {
    id?: any
    className?: string
    onClick?: number 
    bookmarkActive?: boolean
    likeActive?: boolean
    dislikeActive?: boolean
    likeCount?: number
} */

type LikebarProps = {
    postId?: number | undefined
}

export const Likebar = ({postId}: LikebarProps) => {

    const {onLikePost, onDislikePost, onBookmarkPost, statePost } = usePosts()

    const id = Number(postId);

    const postInfo = statePost(id)
    console.log(postInfo);


    return (
        <div className= 'likebar'>
            <div className="likebar__left">
                <Button
                    /* icon={<Up />} */
                    icon={postInfo?.like ? <More /> : <Up />} 
                    className={`likebar`}
                    onClick={() => onLikePost(id)}
                />
                <p className={`likebar__counter`}>{id}</p>
                <Button
                    icon={postInfo?.like === false ? <More /> : <Down />} 
                    /* icon={<Down />} */
                    className={`likebar`}
                    onClick={() => onDislikePost(id)}
                />
            </div>
            <div className="likebar__right">
                <Button
                    icon={postInfo?.bookmark  ? <More /> : <Bookmark />} 
                    /* icon={<Bookmark />} */
                    className={`likebar`}
                    onClick={() => onBookmarkPost(id)}
                />
                <Button
                    icon={<More />}
                    className={`likebar`}
                />
            </div>
        </div>
    )
}