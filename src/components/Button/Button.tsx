import './Button.css'

type ButtonProps = {
    text: string
    onClick: () => void
    className: string
    disabled: boolean
    image?: string
}

export const Button = ({onClick, text, disabled, className, image}: ButtonProps) => {
    return (
        <button type='button' className={className} disabled={disabled} onClick={onClick }>{image && <img src={image}/>}{text}</button>
    )
}