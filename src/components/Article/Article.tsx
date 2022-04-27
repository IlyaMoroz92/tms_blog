import React from 'react'
import './Article.css'

type ArticleProps = {
    className?: string
    text?: string
}


export const Article = (props: ArticleProps) => {
    return (
        <div className= 'mainDiv'>
            <p className='pArticle'>{props.text}</p>
        </div>
    )
}