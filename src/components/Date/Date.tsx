import React from 'react'
import './Date.scss'

type DateProps = {
    className?: string
    date?: string
}


export const Date = (props: DateProps) => {
    return (
        <div>
            <p className={`date date--${props.className}`}>{props.date}</p>
        </div>
    )
}