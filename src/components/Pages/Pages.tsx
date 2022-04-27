import './Pages.css'
import Left from '../Pages/img/Left.svg'
import Right from '../Pages/img/Right.svg'

type PagesProps = {
    className?: string
}

export const Pages = (props: PagesProps) => {
    return (
        <div className='mainDivPages'>
            <div className="previousPages">
                <p className="leftArrow"><img className='imgPages' src={Left} alt="" />     Prev</p>
            </div>
            <div className="numberPages">
                <p className="pPages">1</p>
                <p className="pPages">2</p>
                <p className="pPages">3</p>
                <p className="pPages">...</p>
                <p className="pPages">6</p>
            </div>
            <div className="nextPages">
                <p className="rightArrow">Next <img className='imgPages' src={Right} alt="" /></p>
            </div>
        </div>
    )
}