import './TitleNav.scss'


type TitleNavProps = {
    className?: string
    text?: string
}

export const TitleNav = (props: TitleNavProps) => {
    return (
        <div className='titlenav__main'>
            <p className={`titlenav titlenav--${props.className}`}>{props.text}Back to home</p>
        </div>
    )
}




