/* import React from 'react' */
import './Button.css'

type ButtonProps = {
    text: string
    onClick: () => void
    className: string
    disabled: boolean
    image?: any
}




export const Button = ({onClick, text, disabled, className, image}: ButtonProps) => {
    return (
        <button type='button' className={className} disabled={disabled}  onClick={onClick }>{text}<img src={image}/></button>
    )
}