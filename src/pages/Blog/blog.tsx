import { Title } from "../../components/Title";
import { Tabs } from "../../components/Tabs";
import { Postcard } from "../../components/Postcard";
import {  content } from '../../components/Postcard/content';

export const Blog = () => {
    return (
    <>
        <Title text='Blog' className='title'/>
        <Tabs/>
        <div>
            {content.map((el, ind) => {
                if(ind < 1) {
                return (
                    <Postcard
                        key={ind}
                        title={el.title}
                        text={el.text}
                        image={el.image}
                        date={el.date}
                        className='sizeL'
                    />
                )} else if(ind < 6) {
                return (
                    <Postcard 
                        key={ind}
                        title={el.title}
                        image={el.image}
                        date={el.date}
                        className='sizeM'
                    />
                )} else if(ind < 12) {
                return (
                    <Postcard
                        key={ind}
                        title={el.title}
                        image={el.image}
                        date={el.date}
                        className='sizeS'
                    />
                )}
                }
            )}
        </div>
    </>
    );
}