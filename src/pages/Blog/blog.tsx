import React from "react";
import { Title } from "../../components/Title";
import { TitleNav } from "../../components/TitleNav";

export const Blog = () => {
    return (
    <>
        <TitleNav  to='/' text='Home'/>
        <Title text='Blog' className='title'/>
    </>
    );
}