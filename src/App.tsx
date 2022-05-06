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


import IconBlack from '../src/components/Button/img/IconBlack.svg'
import LikeDownBlack from '../src/components/Button/img/LikeDownBlack.svg'
import LikeUpBlack from '../src/components/Button/img/LikeUpBlack.svg'




const cards = [
  {
      id: 1,
      title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
      description: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1652054400&Signature=Iy~SAIDzclA5fWDcIL16GAbiux8fI0ubDMmfaWlQgZc5dQcOesWbmaAKU8ZZzLxUkx-G9m-TbEMxVtrEpE7mODIzyKiPSH~FVzX0-thG4c4Au2ui9Jtxdeob4OrF9M2tRriSoYIIVa8a7XFI-oaCVPjF1-c08bvYJTgfE5r7nDLjbD4KcgL8EnEG~nWfnoF8fMjKL-sJmoGATaSgLAc~KgT19VNpHTS82TCGoX-V0W0OkTIK8Rz-~CkHf1zBuSt5fzLEGIaGCbMeruUm6MSR7xiht1hrL9DuqxdHa8tYUH-mODts6L182QCRxZKndPB6oi0HnL9IQ2K0DCYEAPQ4Ag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {}
]


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
      {/* <LogIn/> */}
      {/* <InputNew/> */}


      <PostCard/>
    </div>
  )
}

export default App;
