import { useState } from 'react'
import './Input.scss'
import React, { ForwardedRef } from 'react';

type InputProps = {
    title?: string
    className?: string
    disabled?: boolean
    placeholder?: string
    type?: React.HTMLInputTypeAttribute
    onChange?: (event:any) => void
    errorMessage?: string
    value?: any
    ref?: string
}

export const Input = React.forwardRef(({title, placeholder, disabled, className, onChange, value, errorMessage, type}: InputProps, ref: ForwardedRef<any>) => {
    /* const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('') */
/*     const handleChange = (event: any) => {
        setInputValue(event.target.value)
        if(event.target.value.length < 5 && type === 'password') {
            setError(`${errorMessage}`);
        } else {
            setError('');
        }
    } */
    return (
        <div className={`input__div input__div--${className}`}> {title}
            <input
                className={`input input--${className}`}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                ref={ref}
            />
            {type === 'password' && <p className={`input__error input__error--${className}`}>{errorMessage}</p>}
        </div>
    )
})