import React from 'react'
import './Picture.css'


type PictureProps = {
    className?: string
    image?: any
}


export const Picture = (props: PictureProps) => {
    return (
        <div className= {props.className}>
            <img src={props.image} alt="" />
        </div>
    )
}