import { Postcard } from "../../components/Postcard";
import { useEffect } from 'react'
import { usePosts } from '../../features/getPosts'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

export const PostPage: any = () => {

    const {posts, getPost, post} = usePosts()
    const { id } = useParams();
    const idPost = Number(id)

    useEffect(() => {
        getPost(idPost)
    }, [id])


    return (
        <div className="all__blog">
            <p>
                <Link  to='/'>Home</Link>
            </p>
            <Postcard
                title={post?.title}
                text={post?.text}
                image={post?.image}
                className='post'
                likeCount={post?.id}
                id={post?.id}
            />
        </div>
    );
}