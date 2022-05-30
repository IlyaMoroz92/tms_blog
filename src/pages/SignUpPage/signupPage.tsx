import { Title } from "../../components/Title";
import { TitleNav } from "../../components/TitleNav";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'

export const SignUpPage = () => {
    return (
        <>
            <TitleNav  to='/' text='Back to home'/>
            <Title text='Sign Up' className='title'/>
            <div className='sign__form'>
                <Input
                    title='Name'
                    className='input'
                    type='text'
                    placeholder='Введите имя'
                />
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
                <Input
                    title='Confirm password'
                    className='password'
                    type='password'
                    placeholder='Повторите пароль'
                    errorMessage='Пароль слишком короткий'
                />
                <Button
                    className='primary sign__button'
                    type='button'
                    onClick={()=> console.log('click signIn')}
                    text='Sign Up '
                />
                <p className="sign__question">Already have an account ? <NavLink to='/signin'>Sign In</NavLink></p>
            </div>
        </>
    )
}