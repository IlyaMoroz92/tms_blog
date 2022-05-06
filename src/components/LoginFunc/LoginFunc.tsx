/* import React from 'react' */
import { useState } from 'react'
import './LoginFunc.css'

type LoginFuncProps = {
    text: string
    className: string
    disabled?: boolean
    placeholder: string
    type: string
    label: string
    classNameInput: string
}


export const LoginFunc = (props: LoginFuncProps) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const handleChange = (event: any) => {
        setInputValue(event.target.value)
        if(event.target.value.length < 5 && props.type === 'password') {
            setError('Пароль слишком короткий')
            console.log(error)
        } else {
            setInputValue('everything is good')
            setError('')
            console.log(inputValue)
        }
    }
}