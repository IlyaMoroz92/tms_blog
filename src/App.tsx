import React from 'react';
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Textarea } from './components/Textarea'
import { PostList } from './components/PostList'
import { PostCard } from './components/PostCard'
import { LogIn } from './components/LogIn'
import { LoginFunc } from './components/LoginFunc'
import { PostCardNew } from './components/PostCardNew'
import { content } from './components/PostCardNew/content';


import IconBlack from '../src/components/Button/img/IconBlack.svg'
import LikeDownBlack from '../src/components/Button/img/LikeDownBlack.svg'
import LikeUpBlack from '../src/components/Button/img/LikeUpBlack.svg'



function App() {


  return (
    <div className="App">
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
                  image={require(`${el.image}`)}
                  date={el.date}
                  className='sizeM'
                />
                )
            } else if(ind < 12) {
              return (
                <PostCardNew key={ind}
                  title={el.title}
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




  )
}

export default App;
