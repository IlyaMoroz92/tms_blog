import React from 'react'
import './Title.css'

type TitleProps = {
    className?: string
    text?: string
}


export const Title = (props: TitleProps) => {
    return (
        <div className='divTitle'>
            <p className={props.className}>{props.text}</p>
        </div>
    )
}