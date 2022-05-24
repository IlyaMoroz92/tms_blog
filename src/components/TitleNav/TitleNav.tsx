import './TitleNav.scss'
import {NavLink} from 'react-router-dom'

type TitleNavProps = {
    className?: string
    text?: string
    to?: any
}

export const TitleNav = (props: TitleNavProps) => {
    return (
        <NavLink to={props.to} className={`titlenav__link--${props.className}`}>{props.text} </NavLink>
    )
}
