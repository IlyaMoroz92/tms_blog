import React from 'react';
import './App.scss';
import { Button } from './components/Button';
import { ReactComponent as Down} from './components/Button/img/Down.svg' 
import { ReactComponent as Bookmark} from './components/Button/img/Bookmark.svg' 
import { ReactComponent as Up} from './components/Button/img/Down.svg' 
import { ReactComponent as More} from './components/Button/img/More.svg' 
import { Input } from './components/Input';
import { Header } from './components/Header';
import {NavLink} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import { Blog } from "./pages/Blog/blog";
import  Layout  from './components/Layout/Layout';
import { Title } from './components/Title';
import { Likebar } from './components/Likebar';
import { Footer } from './components/Footer';
import { Date } from './components/Date';

function App() {
  return (
    <div className="App">
      <Blog />
      <div className="buttons">
        <Button 
          text='Primary'
          className='primary'/>
        <Button
          text='Secondary'
          className='secondary'
        />
        <Button
          text='Secondary 2'
          className='secondary2'
        />
        <Button
          text='Button with icon'
          icon={<Bookmark />}
          className='with-icon'
        />
        <Button
          icon={<Down/>}
          className='with-icon-dislike'
          />
        <Button
          icon={<Up />}
          className='with-icon-like'
          />
      </div>
      <div className="buttons_disabled">
      <Button 
          text='Primary'
          className='primary'
          disabled
          />
        <Button
          text='Secondary'
          className='secondary'
          disabled
        />
        <Button
          text='Secondary 2'
          className='secondary2'
          disabled
        />
        <Button
          text='Button with icon'
          icon={<Bookmark />}
          className='with-icon'
          disabled
        />
        <Button
          icon={<Down/>}
          className='with-icon-dislike'
          disabled
          />
        <Button
          icon={<Up />}
          className='with-icon-like'
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
      <Date
      className='today'
      date='22-05-1992'/>
      <Footer
      className='123'/>
    </div>
  );
}

export default App