import React from 'react'
import './Article.scss'

type ArticleProps = {
    className?: string
    text?: string
}

export const Article = (props: ArticleProps) => {
    return (
        <p className={`article article--${props.className}`}>{props.text}</p>
    )
}