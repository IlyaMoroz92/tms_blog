
import './Footer.scss'

type FooterProps = {
    className?: string
}

export const Footer = (props: FooterProps) => {
    return (
        <div className={`footer footer--${props.className} `}>
            <p className={`footer__year--${props.className}`}>©2022 Blogfolio</p>
            <p className={`footer__rights--${props.className}`}>All rights reserved</p>
        </div>
    )
}