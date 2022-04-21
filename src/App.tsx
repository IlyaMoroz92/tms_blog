import React from 'react';
import { Button } from './components/Button/Button'

import IconBlack from '../src/components/Button/img/IconBlack.svg'
import LikeDownBlack from '../src/components/Button/img/LikeDownBlack.svg'
import LikeUpBlack from '../src/components/Button/img/LikeUpBlack.svg'

import IconWhite from '../src/components/Button/img/IconBlack.svg'
import LikeDownWhite from '../src/components/Button/img/LikeDownBlack.svg'
import LikeUpWhite from '../src/components/Button/img/LikeUpBlack.svg'


function App() {
  return (
    <div className="App">
      <Button text = 'Primary' onClick ={() => console.log('Primary')} className='primary' disabled={false} />
      <Button text = 'Secondary' onClick ={() => console.log('Secondary')} className='secondary' disabled={false}/>
      <Button text = 'Secondary 2' onClick ={() => console.log('Secondary 2')} className='secondary2' disabled={false}/>
      <Button text = '  Button with icon' onClick ={() => console.log('Button with icon')} className='bvi' disabled={false} image={IconBlack}/>
      <Button text = '' onClick ={() => console.log('like down')} className='likeDown' disabled={false} image={LikeDownBlack}/>
      <Button text = '' onClick ={() => console.log('like up')} className='likeUp' disabled={false} image={LikeUpBlack}/>
    </div>
  )
}

export default App;
