import './TitleNav.scss'
import {NavLink} from 'react-router-dom'

type TitleNavProps = {
    className?: string
    text?: string
    to?: any
}

export const TitleNav = (props: TitleNavProps) => {
    return (
        <div className='titlenav__main'>
            <NavLink to={props.to}>{props.text}</NavLink>
        </div>
    )
}




