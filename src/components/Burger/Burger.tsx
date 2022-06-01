import React from 'react'
import './Burger.scss'
import { User } from "../User";
import { Button } from "../Button";
import { ReactComponent as Closed} from './img/Closed.svg' 
import { ReactComponent as Light} from './img/Light.svg' 
import { ReactComponent as Dark} from './img/Dark.svg' 

type BurgerProps = {
    className?: string
    text?: string
    active?: boolean
    setActive?: any
}

export const Burger = (props: BurgerProps) => {
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
                    />
                    <Button
                        icon={<Dark />}
                        className='burger--theme'
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