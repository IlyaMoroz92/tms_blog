import { useState } from 'react'
import './Header.scss'

type HeaderProps = {
    title?: string
    className?: string
    disabled?: boolean
    placeholder?: string
    type?: React.HTMLInputTypeAttribute
    onChange?: (event:any) => void
    errorMessage?: string
}

export const Header = (props: HeaderProps) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const handleChange = (event: any) => {
        setInputValue(event.target.value)
        if(event.target.value.length < 5 && props.type === 'password') {
            setError(`${props.errorMessage}`);
        } else {
            setError('');
        }
    }
    return (
        <div className={`input__div input__div--${props.className}`}> {props.title}
            <input
                className={`input input--${props.className}`}
                type={props.type}
                onChange={handleChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
            <p className={`input__error input__error--${props.className}`}>{error}</p>
        </div>
    )
}