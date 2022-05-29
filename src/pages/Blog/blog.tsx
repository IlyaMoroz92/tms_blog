import { Title } from "../../components/Title";
import { Tabs } from "../../components/Tabs";
import { Postcard } from "../../components/Postcard";
import {  content } from '../../components/Postcard/content';

export const Blog = () => {
    return (
    <>
        <Title text='Blog' className='title'/>
        <Tabs/>
    </>
    );
}