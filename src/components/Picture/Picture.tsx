import './Picture.scss'


type PictureProps = {
    className?: string
    src?: any
    alt?: string
}


export const Picture = (props: PictureProps) => {
    return (
        <img className={props.className} src={props.src} alt={props.alt} />
    )
}




