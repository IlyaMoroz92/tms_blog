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
                    <div className="oneGridPostList relative"><PostCard/></div>
                    <div className="twoGridPostList relative"><PostCardMin/></div>
                    <div className="threeGridPostList relative"><PostCardMin/></div>
                    <div className="fourGridPostList relative"><PostCardMin/></div>
                    <div className="fiveGridPostList relative"><PostCardMin/></div>
                    <div className="sixGridPostList relative"><PostCardMicro/></div>
                    <div className="sevenGridPostList relative"><PostCardMicro/></div>
                    <div className="eightGridPostList relative"><PostCardMicro/></div>
                    <div className="nineGridPostList relative"><PostCardMicro/></div>
                    <div className="tenGridPostList relative"><PostCardMicro/></div>
                    <div className="elevenGridPostList relative"><PostCardMicro/></div>
                </div>
                <Pages/>
                <Footer/>
            </div>
        </div>
    )
}