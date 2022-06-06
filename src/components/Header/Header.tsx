import React from 'react';
import {useState } from 'react'
import { Button } from '../Button';
import { Input } from '../Input';
import { ReactComponent as BurgerOpen} from './img/BurgerOpen.svg' 
import { ReactComponent as BurgerClose} from './img/BurgerClose.svg' 
import { ReactComponent as Search} from './img/Search.svg' 
import { User } from "../User";
import { Burger } from "../Burger";

import './Header.scss'


type HeaderProps = {
    className?: string
    image?: string
}

export const Header = (props: HeaderProps) => {
    const [burgerActive, SetBurgerActive] = useState(false)
    const [isSearchPanelVisible, setIsSearchPanelVisible] = useState(false)
    
    const toggleVisible = () => {
        setIsSearchPanelVisible((isSearchPanelVisible): boolean => !isSearchPanelVisible)
    }

    return (
        <div className='header__main'>
            <div className="header__burger">
                <Button
                    text=''
                    icon={<BurgerOpen />}
                    className='burger header__buttons'
                    onClick={() => SetBurgerActive(!burgerActive)}
                />
            </div>
            {isSearchPanelVisible && 
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
                    <User text='Ilya Moroz' abbr='IM'/>
                </div>
            </div>
            <Burger active={burgerActive} setActive={SetBurgerActive}/>
        </div>
    )
}

