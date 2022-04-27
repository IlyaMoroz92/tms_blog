import './Header.css'
import Burger from './img/Burger.svg'
import Search from './img/Search.svg'


type HeaderProps = {
    className?: string
    image?: string
}

export const Header = (props: HeaderProps) => {
    return (
        <div className='mainDivHeader'>
            <div className="buttonBurger">
                <button className="burger buttonHeader"><img src={Burger} alt="burger" /></button>
            </div>
            <div className="buttonSearch">
                <button className="search buttonHeader"><img src={Search} alt="search" /></button>
                <div className="headerName">
                    <span className='spanAbbr'>AM</span>
                    <span className='spanName'>Artem Malkin</span>
                </div>
            </div>
        </div>
    )
}