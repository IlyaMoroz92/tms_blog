import './Sign.css'

type SignProps = {
    className?: string
    image?: string
}

export const Sign = (props: SignProps) => {
    return (
        <div className='mainDivBSign'>
            <p className='pSignBack' >Back to home</p>
            <p className='pSign' >Sign In</p>
        </div>
    )
}