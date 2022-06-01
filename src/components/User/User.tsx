
import './User.scss'

type UserProps = {
    className?: string
    text?: string
    abbr?: string
}

export const User = (props: UserProps) => {
    return (
        <div className='user'>
            <span className='user__abbr'>{props.abbr}</span>
            <span className='user__name'>{props.text}</span>
        </div>
    )
}