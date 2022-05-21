import './Title.scss'


type TitleProps = {
    className?: string
    text?: string
}

export const Title = (props: TitleProps) => {
    return (
        <div className='title__main'>
            <h2 className={props.className}>{props.text}</h2>
        </div>
    )
}




