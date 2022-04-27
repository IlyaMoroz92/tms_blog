import React from 'react'
import './Picture.css'


type PictureProps = {
    className?: string
    image: any
}


export const Picture = (props: PictureProps) => {
    return (
        <div className= {props.className}>
            <img className='imgPicture' src={props.image} alt="" />
        </div>
    )
}