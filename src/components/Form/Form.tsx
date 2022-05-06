import './Form.css'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

type FormProps = {
    className?: string
    image?: string
}

export const Form = (props: FormProps) => {
    return (
        <div className='mainDivForm'>
            <div className="divInputForm">
                <Input text = 'Email' type='email' className='div' classNameInput='input inputEmailForm' disabled={false} placeholder='Your email' label='' />
            </div>
            <div className="divInputForm">
            <   Input text = 'Password' type='password'  className='div' classNameInput='input inputPasswordForm' disabled={false} placeholder='Your password' label=''/>
            </div>
            <div className="divForgotPassword"><p className="pForgotPassword">Forgot password?</p></div>
            <Button text = 'Sign In' onClick ={() => console.log('Sign In')} className='primary buttonSignIn' disabled={false} />
            <div className="divSignUp"><p className="pSignUp">Don’t have an account?<span className='spanSignUp'>Sign Up</span></p></div>
        </div>
    )
}