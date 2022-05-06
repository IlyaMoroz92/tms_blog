/* import React from 'react' */
import { useState } from 'react'
import './InputNew.css'
import { LoginFunc } from '../LoginFunc/LoginFunc'

type InputNewProps = {
    text?: string
    className?: string
    disabled?: boolean
    placeholder?: string
    type?: string
    error?: string
    value?: string
    onChange?(): void
}


export const InputNew = (props: InputNewProps) => {
    return (
        <div className={props.className}> {props.text}
                <input className= {props.className} type={props.type} /* onChange={LoginFunc} *//>
                {props.error && <label>{props.error}</label>}
        </div>
    )
}