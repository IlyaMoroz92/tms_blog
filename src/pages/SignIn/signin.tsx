import { Title } from "../../components/Title";
import { TitleNav } from "../../components/TitleNav";

export const SignIn = () => {
    return (
        <>
            <TitleNav  to='/' text='Home'/>
            <Title text='Sign In' className='title'/>
        </>
    )
}