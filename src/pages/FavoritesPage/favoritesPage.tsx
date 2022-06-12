import { Postcard } from "../../components/Postcard";
import { usePosts } from '../../features/getPosts'
import {  IPost } from '../../features/getPosts/postsSlice'



export const FavoritesPage = () => {

    const { posts } = usePosts()


    return (
    <>
        {posts?.map((el: IPost, ind: number) => {
            return (
                el.bookmark
                    &&
                <Postcard
                    key={ind}
                    title={el.title}
                    text={el.text}
                    image={el.image}
                    date={el.date}
                    className={`sizeL grid--${ind}`}
                    id={el.id}
                />
            )
        })}
    </>
    );
}