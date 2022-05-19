
import {useState, useEffect} from 'react';
import './App.css';
import { Button } from './components/Button';
import { ReactComponent as Down} from './components/Button/img/Down.svg' 
import { ReactComponent as Bookmark} from './components/Button/img/Bookmark.svg' 
import { ReactComponent as Up} from './components/Button/img/Down.svg' 
import { Input } from './components/Input';
import { useTheme } from './features/theme/useTheme';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchPosts} from './features/posts/postsSlice';
import { postsData} from './redux/postsData';



function App() {
 /*  const [theme, setTheme] = useState('dark') */
  /* const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log('works')
    setTheme(newTheme)
  } */

  const {theme, toggleTheme } = useTheme()

  const posts = useAppSelector(state => state.posts.content)
  const dispatch = useAppDispatch()


  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts(postsData))
    }, 100);
  })

  console.log(posts)

  return (
    <div className={`App theme--${theme}`}>
      <div className="buttons">
        <Button 
          text='Primary'
          className='primary margin'
          onClick={toggleTheme}/>
        <Button
          text='Secondary'
          className='secondary margin'
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
        title='Password'
        className='password'
        type='password'
        placeholder='Введите пароль'
        errorMessage='Пароль слишком короткий'
      />
      <Input
        title='Email'
        className='email'
        type="email"
        placeholder='Введите mail'
      />
    </div>
  );
}

export default App