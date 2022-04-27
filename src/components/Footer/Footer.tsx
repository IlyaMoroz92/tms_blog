import './Footer.css'

type FooterProps = {
    className?: string
}

export const Footer = (props: FooterProps) => {
    return (
        <div className='mainDivFooter'>
            <p className="yearFooter">©2022 Blogfolio</p>
            <p className="rightsFooter">All rights reserved</p>
        </div>
    )
}