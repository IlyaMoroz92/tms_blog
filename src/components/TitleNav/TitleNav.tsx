import './TitleNav.scss'
import {NavLink} from 'react-router-dom'

type TitleNavProps = {
    className?: string
    text?: string
    to?: any
}

export const TitleNav = (props: TitleNavProps) => {
    return (
        <div className={`titlenav titlenav--${props.className}`}>
            <NavLink to={props.to} className={`titlenav__link--${props.className}`}>{props.text} </NavLink>
        </div>
    )
}
