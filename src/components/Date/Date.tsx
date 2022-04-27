import React from 'react'
import './Date.css'

type DateProps = {
    className?: string
    text?: string
}


export const Date = (props: DateProps) => {
    return (
        <div className='divDate'>
            <p className='pDate'>{props.text}</p>
        </div>
    )
}