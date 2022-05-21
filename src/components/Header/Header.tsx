import { useState } from 'react'
import { Button } from '../Button';
import { ReactComponent as BurgerOpen} from './img/BurgerOpen.svg' 
import { ReactComponent as BurgerClose} from './img/BurgerClose.svg' 
import { ReactComponent as Search} from './img/Search.svg' 

import './Header.scss'


type HeaderProps = {
    className?: string
    image?: string
}

export const Header = (props: HeaderProps) => {
    return (
        <div className='header__main'>
            <div className="header__burger">
                <Button
                    text=''
                    icon={<BurgerOpen />}
                    className='burger header__buttons'
                />
            </div>
            <div className="header__right">
                <div className="header__search">
                    <Button
                        text=''
                        icon={<Search />}
                        className='search header__buttons'
                    />
            </div>
                <div className="header__user">
                    <span className='header__user--abbr'>AM</span>
                    <span className='header__user--name'>Artem Malkin</span>
                </div>
            </div>
        </div>
    )
}





/* 
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
} */