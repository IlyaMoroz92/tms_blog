import React from 'react'
import './Burger.scss'
import { User } from "../User";
import { Button } from "../Button";
import { ReactComponent as Closed} from './img/Closed.svg' 
import { ReactComponent as Light} from './img/Light.svg' 
import { ReactComponent as Dark} from './img/Dark.svg' 
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useTheme } from '../../features/theme/useTheme'


type BurgerProps = {
    className?: string
    text?: string
    active?: boolean
    setActive?: any
}

export const Burger = (props: BurgerProps) => {

    const {theme, lightTheme, darkTheme, toggleTheme} = useTheme()
    /* console.log(theme);
        
    const dispatch = useAppDispatch() */




    return (
        
        <div className={props.active ? 'burger active' : 'burger'}>
            <div className="burger__buttons">
                <div className="burger__buttons-up">
                    <div className="burger__user"><User text='Ilya Moroz' abbr='IM'/></div>
                    <Button
                        text='Home'
                        className='burger'
                    />
                    <Button
                        text='Add post'
                        className='burger'
                    />
                </div>
                <div className="burger__buttons-down">
                    <div className="burger__buttons-theme">
                    <Button
                        icon={<Light />}
                        className='burger--theme'
                        onClick={lightTheme}
                    />
                    <Button
                        icon={<Dark />}
                        className='burger--theme'
                        onClick={darkTheme}
                    />
                    </div>
                    <Button
                        text='Log Out'
                        className='burger'
                    />
                </div>
            </div>
        </div>
    )
}