import React from 'react';
import './App.css'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { Textarea } from './components/Textarea/Textarea'
import { Likes } from './components/Likes/Likes'
import { Article } from './components/Article/Article'
import { Picture } from './components/Picture/Picture'
import { Date } from './components/Date/Date'
import { Title } from './components/Title/Title'
import { PostCard } from './components/PostCard/PostCard'
import { PostCardMin } from './components/PostCardMin/PostCardMin'
import { PostCardMicro } from './components/PostCardMicro/PostCardMicro'
import { Header } from './components/Header/Header'
import { Blog } from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'
import { Pages } from './components/Pages/Pages'
import { PostList } from './components/PostList/PostList'


import IconBlack from '../src/components/Button/img/IconBlack.svg'
import LikeDownBlack from '../src/components/Button/img/LikeDownBlack.svg'
import LikeUpBlack from '../src/components/Button/img/LikeUpBlack.svg'



function App() {
  return (
    <div className="App">
      <div className="buttonsAndInputs">
        <Button text = 'Primary' onClick ={() => console.log('Primary')} className='primary button' disabled={false} />
        <Button text = 'Secondary' onClick ={() => console.log('Secondary')} className='secondary button' disabled={false}/>
        <Button text = 'Secondary 2' onClick ={() => console.log('Secondary 2')} className='secondary2 button' disabled={false}/>
        <Button text = '  Button with icon' onClick ={() => console.log('Button with icon')} className='buttonWithIcon button' disabled={false} image={IconBlack}/>
        <Button text = '' onClick ={() => console.log('like down')} className='likeDown button' disabled={false} image={LikeDownBlack}/>
        <Button text = '' onClick ={() => console.log('like up')} className='likeUp button' disabled={false} image={LikeUpBlack}/>
        <Input text = 'Text' type='text' className='div' classNameInput='input' disabled={false} placeholder='введите текст' label='' />
        <Input text = 'Email' type='email' className='div' classNameInput='input' disabled={false} placeholder='введите email' label='' />
        <Input text = 'Password' type='password'  className='div' classNameInput='input' disabled={false} placeholder='введите пароль' label=''/>
        <Textarea text = 'Textarea' type='textarea'  className='divTextarea' classNameTextarea='textarea' disabled={false} placeholder='введите коментарий'/>
      </div>

      <PostList/>
    </div>
  )
}



export default App;
