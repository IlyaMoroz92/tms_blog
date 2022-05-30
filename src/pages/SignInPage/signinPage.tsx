import { Title } from "../../components/Title";
import { TitleNav } from "../../components/TitleNav";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'

export const SignInPage = () => {
    return (
        <>
            <TitleNav  to='/' text='Back to home'/>
            <Title text='Sign In' className='title'/>
            <div className='sign__form'>
                <Input
                    title='Email'
                    className='password'
                    type='email'
                    placeholder='Введите email'
                />
                <Input
                    title='Password'
                    className='password'
                    type='password'
                    placeholder='Введите пароль'
                    errorMessage='Пароль слишком короткий'
                />
                <Button
                    className='primary sign__button'
                    type='button'
                    onClick={()=> console.log('click signIn')}
                    text='Sign In '
                />
                <p className="sign__question">Don't have an account ? <NavLink to='/signup'>Sign Up</NavLink></p>
            </div>
        </>
    )
}