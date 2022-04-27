/* import React from 'react' */
import { useState } from 'react'
import './Input.css'

type InputProps = {
    text: string
    className: string
    disabled?: boolean
    placeholder: string
    type: string
    label: string
    classNameInput: string
}


export const Input = (props: InputProps) => {
    const [style, setRed]= useState('')
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const handleChange = (event: any) => {
        setInputValue(event.target.value)
        if(event.target.value.length < 5 && props.type === 'password') {
            setError('Пароль слишком короткий')
            setRed('red')
        } else {
            setError('')
            setRed('blue')
        }
    }
    return (
        <div className={props.className} > {props.text}
            <label htmlFor="" >{props.label}
                <input className= {props.classNameInput} style={{borderColor: style, }} type={props.type} onChange={handleChange} placeholder={props.placeholder} disabled={props.disabled}/>
                {error && <label className="error">{error}</label>}
            </label>
        </div>
    )
}