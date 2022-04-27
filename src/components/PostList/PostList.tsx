import './PostList.css'
import { Header } from '../Header/Header'
import { Blog } from '../Blog/Blog'
import { PostCard } from '../PostCard/PostCard'
import { PostCardMin } from '../PostCardMin/PostCardMin'
import { PostCardMicro } from '../PostCardMicro/PostCardMicro'
import { Pages } from '../Pages/Pages'
import { Footer } from '../Footer/Footer'

type PostListProps = {
    className?: string
}

export const PostList = (props: PostListProps) => {
    return (
        <div className='mainDivPostList'>
            <Header/>
            <div className="wrapperPostList">
                <Blog/>
                <div className="contentPostList">
                    <div className="oneGridPostList"><PostCard/></div>
                    <div className="twoGridPostList"><PostCardMin/></div>
                    <div className="threeGridPostList"><PostCardMin/></div>
                    <div className="fourGridPostList"><PostCardMin/></div>
                    <div className="fiveGridPostList"><PostCardMin/></div>
                    <div className="sixGridPostList"><PostCardMicro/></div>
                    <div className="sevenGridPostList"><PostCardMicro/></div>
                    <div className="eightGridPostList"><PostCardMicro/></div>
                    <div className="nineGridPostList"><PostCardMicro/></div>
                    <div className="tenGridPostList"><PostCardMicro/></div>
                    <div className="elevenGridPostList"><PostCardMicro/></div>
                </div>
                <Pages/>
                <Footer/>
            </div>
        </div>
    )
}