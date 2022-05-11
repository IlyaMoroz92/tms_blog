import React from 'react';
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Textarea } from './components/Textarea'
import { PostList } from './components/PostList'
import { PostCard } from './components/PostCard'
import { LogIn } from './components/LogIn'
import { LoginFunc } from './components/LoginFunc'
/* import { InputNew } from './components/InputNew/InputNew' */
import { PostCardNew } from './components/PostCardNew'
import { content } from './components/PostCardNew/content';


import IconBlack from '../src/components/Button/img/IconBlack.svg'
import LikeDownBlack from '../src/components/Button/img/LikeDownBlack.svg'
import LikeUpBlack from '../src/components/Button/img/LikeUpBlack.svg'



function App() {


  return (
    <div className="App">
     {/*  <div className="buttonsAndInputs">
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

      <PostList/> */}
      {/* <LogIn/> */}
      {/* <InputNew/> */}
      {/* <PostCardNew/> */}


      <div>
{/*         <ul>
          {content.map((el, ind) => (
            <li key={`${ind}`}>
              <img src={require(`${el.image}`)} alt="" />
              <p>{el.date}</p>
              <p>{el.title}</p>
              <p>{el.text}</p>
            </li>
          ))}
        </ul> */}


        <div>
          {content.map((el, ind) => {
            if(ind < 1) {
              return (
              <PostCardNew key={ind}
                title={el.title}
                text={el.text}
                image={require(`${el.image}`)}
                date={el.date}
                className='sizeL'
              />
              )
            } else if(ind < 6) {
              return (
                <PostCardNew key={ind}
                  title={el.title}
                  /* text={el.text} */
                  image={require(`${el.image}`)}
                  date={el.date}
                  className='sizeM'
                />
                )
            } else if(ind < 12) {
              return (
                <PostCardNew key={ind}
                  title={el.title}
                  /* text={el.text} */
                  image={require(`${el.image}`)}
                  date={el.date}
                  className='sizeS'
                />
                )
            }
              }
          )}
          
        </div>
      </div>




    </div>
  )
}

export default App;
