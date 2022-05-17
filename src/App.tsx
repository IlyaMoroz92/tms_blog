
import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { ReactComponent as Down} from './components/Button/img/Down.svg' 
import { ReactComponent as Bookmark} from './components/Button/img/Bookmark.svg' 
import { ReactComponent as Up} from './components/Button/img/Down.svg' 
import { ReactComponent as More} from './components/Button/img/More.svg' 
import { Input } from './components/Input';
import { Likebar } from './components/Likebar';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button 
          text='Primary'
          className='primary button'/>
        <Button
          text='Secondary'
          className='secondary button'
        />
        <Button
          text='Secondary 2'
          className='secondary2 button'
        />
        <Button
          text='Button with icon'
          icon={<Bookmark />}
          className='with-icon button'
        />
        <Button
          icon={<Down/>}
          className='with-icon-dislike button'
          />
        <Button
          icon={<Up />}
          className='with-icon-like button'
          />
      </div>
      <div className="buttons_disabled">
      <Button 
          text='Primary'
          className='primary button'
          disabled
          />
        <Button
          text='Secondary'
          className='secondary button'
          disabled
        />
        <Button
          text='Secondary 2'
          className='secondary2 button'
          disabled
        />
        <Button
          text='Button with icon'
          icon={<Bookmark />}
          className='with-icon button'
          disabled
        />
        <Button
          icon={<Down/>}
          className='with-icon-dislike button'
          disabled
          />
        <Button
          icon={<Up />}
          className='with-icon-like button'
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

      <Likebar
      className='likes'/>
      <Footer
      className='w'/>
    </div>
  );
}

export default App