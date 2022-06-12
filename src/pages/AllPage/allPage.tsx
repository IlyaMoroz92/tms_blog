import { Postcard } from "../../components/Postcard";
import { usePosts } from '../../features/getPosts'


interface IPost {
    id?: number;
    image?: string;
    text?: string;
    date?: any;
    lesson_num?: number;
    title?: string;
    author?: number;
    like?: boolean| undefined
    ind?: number
}

export const AllPage: any = () => {

    const {posts} = usePosts()

    return (
        <div className="all__blog">
            {posts?.map((el: IPost, ind: number) => {
                if(ind < 1) {
                    return (
                        <Postcard
                            key={ind}
                            title={el.title}
                            text={el.text}
                            image={el.image}
                            date={el.date}
                            className={`sizeL grid--${ind}`}
                            id={el.id}
                        />
                    )} else if(ind < 5) {
                    return (
                        <Postcard 
                            key={ind}
                            title={el.title}
                            image={el.image}
                            date={el.date}
                            className={`sizeM grid--${ind}`}
                            id={el.id}
                        />
                    )} else if(ind < 11) {
                    return (
                        <Postcard
                            key={ind}
                            title={el.title}
                            image={el.image}
                            date={el.date}
                            className={`sizeS grid--${ind}`}
                            id={el.id}
                        />
                    )}
                }
                )}
        </div>
    );
}