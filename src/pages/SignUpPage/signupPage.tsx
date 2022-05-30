import { Title } from "../../components/Title";
import { TitleNav } from "../../components/TitleNav";

export const SignUpPage = () => {
    return (
        <>
            <TitleNav  to='/' text='Home'/>
            <Title text='Sign Up' className='title'/>
        </>
    )
}