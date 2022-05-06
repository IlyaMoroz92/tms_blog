import './LogIn.css'
import { Header } from '../Header/Header'
import { Blog } from '../Blog/Blog'
import { PostCard } from '../PostCard/PostCard'
import { PostCardMin } from '../PostCardMin/PostCardMin'
import { PostCardMicro } from '../PostCardMicro/PostCardMicro'
import { Pages } from '../Pages/Pages'
import { Footer } from '../Footer/Footer'
import { Sign } from '../Sign/Sign'
import { Form } from '../Form/Form'

type LogInProps = {
    className?: string
}

export const LogIn = (props: LogInProps) => {
    return (
        <div className='mainDivPostList'>
            <Header/>
            <div className="wrapperLogIn">
                <Sign/>
                <Form/>
                <Footer/>
            </div>
        </div>
    )
}