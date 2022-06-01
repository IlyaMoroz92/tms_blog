import { Title } from "../../components/Title";
import { TitleNav } from "../../components/TitleNav";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const VerifyPage = () => {
    return (
        <>
            <TitleNav  to='/' text='Back to home'/>
            <Title text='Verify' className='title'/>
            <div className='sign__form'>
                <Input
                    title='Uid'
                    className='input'
                    type='text'
                    placeholder='Your uid'
                />
                <Input
                    title='Token'
                    className='input'
                    type='text'
                    placeholder='Your token'
                />
                <Button
                    className='primary sign__button'
                    type='button'
                    onClick={()=> console.log('click signIn')}
                    text='Sign Up '
                />
            </div>
        </>
    )
}