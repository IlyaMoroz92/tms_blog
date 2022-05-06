import React from 'react'
import './Date.css'

type DateProps = {
    className?: string
    text?: string
}


export const Date = (props: DateProps) => {
    return (
        <div>
            <p className='date__p'>{props.text}</p>
        </div>
    )
}