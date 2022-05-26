
import React, {useState, useEffect} from 'react';
import './App.css';
import { Button } from './components/Button';
import { ReactComponent as Down} from './components/Button/img/Down.svg' 
import { ReactComponent as Bookmark} from './components/Button/img/Bookmark.svg' 
import { ReactComponent as Up} from './components/Button/img/Down.svg' 
import { Input } from './components/Input';
import { useTheme } from './features/theme/useTheme';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchPosts, likePost, dislikePost} from './features/posts/postsSlice';
import { postsData} from './redux/postsData';
import { usePosts} from './features/posts/usePosts';
import { signUp} from './features/auth';


function App() {

  const {theme, toggleTheme } = useTheme()
  const {posts, onLikePost,  onDislikePost} = usePosts()

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')

  const [confirmpassword, SetConfirmPassword] = useState('')

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetName(event.target.value)
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetEmail(event.target.value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetPassword(event.target.value)
  }

  const onConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetConfirmPassword(event.target.value)
  }

  const dispatch = useAppDispatch()

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>):void => {
    event.preventDefault()
    const formData = {
      name,
      email,
      password,
    }
    dispatch(signUp())
  }

  return (
    <div className={`App theme--${theme}`}>
      {posts?.map(post=> {
        return(
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{String(post.like)}</p>
            <Button 
              text='Like'
              className='primary margin'
              onClick={() =>onLikePost(post.id)}
            />
            <Button 
              text='Dislike'
              className='primary margin'
              onClick={() =>onDislikePost(post.id)}
            />
          </div>)
        }
      )}
      <div className="buttons">
        <Button
          text='Secondary'
          className='secondary margin'
          onClick={toggleTheme}
        />
        <Button
          text='Secondary 2'
          className='secondary2 margin'
        />
        <Button
          text='Button with icon'
          icon={<Bookmark />}
          className='with-icon margin'
        />
        <Button
          icon={<Down/>}
          className='with-icon-dislike margin'
          />
        <Button
          icon={<Up />}
          className='with-icon-like margin'
          />
      </div>
      <div className="buttons_disabled">
      <Button 
          text='Primary'
          className='primary margin'
          disabled
          />
        <Button
          text='Secondary'
          className='secondary margin'
          disabled
        />
        <Button
          text='Secondary 2'
          className='secondary2 margin'
          disabled
        />
        <Button
          text='Button with icon'
          icon={<Bookmark />}
          className='with-icon margin'
          disabled
        />
        <Button
          icon={<Down/>}
          className='with-icon-dislike margin'
          disabled
          />
        <Button
          icon={<Up />}
          className='with-icon-like margin'
          disabled
          />
      </div>
      <Input
        title='Name'
        className=''
        type='text'
        placeholder='Введите Имя'
        onChange={onNameChange}
      />
      <Input
        title='Email'
        className=''
        type="email"
        placeholder='Введите mail'
        onChange={onEmailChange}
      />
      <Input
        title='Password'
        className=''
        type='password'
        placeholder='Введите пароль'
        errorMessage='Пароль слишком короткий'
        onChange={onPasswordChange}
      />
      <Input
        title='Confirm password'
        className=''
        type='password'
        placeholder='Подтвердите пароль'
        errorMessage='Пароль слишком короткий'
        onChange={onConfirmPasswordChange}
      />
      <Button
          text='Sign Up'
          className='primary margin'
          onClick={submitForm}
      />
    </div>
  );
}

export default App