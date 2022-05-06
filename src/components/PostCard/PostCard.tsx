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
    text?: string
    Article?: any
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
                    <Picture image = {'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1652659200&Signature=bvc7xr9OeCv9k7-4luKbJbAtxcLBlWM3NJ1IU08~6MW3vIvnM0vAUYvZ9U4N4TS0alAYdWzB9wn-pc60yJtwF9CrjRb5HLI2THKiIkBQ8fELC8h7lleysW52vWwHWEBE~SUrB~40ToKQk80oJRQ0YL7gtkR4d5KX3NyZJjxLOIWgJmwxcQl~T1HpD5QjlN8uegVkuEqrzOl27jFv6lvxK81DXRH7AmbnZtlWfJ1r6CZGc-M63pEXEqaTlqnwa61MmpX68hWPinC6c3khdLDB8D-E~D54Uk0h6EIzcZFqbv~lAdXed~kSdqQUP47fg5F3cgPKPZSmXriBJfJVJU~wWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' } className='picture__img'/>
                </div>
            </div>
            <Likes/>
        </div>
    )
}