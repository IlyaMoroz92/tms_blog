import React from 'react';
import {useState } from 'react'
import { Button } from '../Button';
import { Input } from '../Input';
import { ReactComponent as BurgerOpen} from './img/BurgerOpen.svg' 
import { ReactComponent as BurgerClose} from './img/BurgerClose.svg' 
import { ReactComponent as Search} from './img/Search.svg' 

import './Header.scss'


type HeaderProps = {
    className?: string
    image?: string
}



export const Header = (props: HeaderProps) => {

    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        
        setVisible((visible): boolean => !visible)
    }

    return (
        <div className='header__main'>
            <div className="header__burger">
                <Button
                    text=''
                    icon={<BurgerOpen />}
                    className='burger header__buttons'
                /> 
            </div>
            {visible && 
                        <Input
                            className='header'
                            type='search'
                            placeholder='Search...'
                        />
            }
            <div className="header__right">
                    
                <div className="header__search">
                    <Button
                        text=''
                        icon={<Search />}
                        onClick={toggleVisible}
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
} */