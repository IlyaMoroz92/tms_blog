import React from 'react';
import { Button } from './components/Button/Button'
import image from '../src/components/Button/img/Up.png'
import image2 from '../src/components/Button/img/Down.png'
import image3 from '../src/components/Button/img/Down.png'


function App() {
  return (
    <div className="App">
      <Button text = 'Primary' onClick ={() => console.log('Primary')} className='primary' disabled={false} />
      <Button text = 'Secondary' onClick ={() => console.log('Secondary')} className='secondary' disabled={false}/>
      <Button text = 'Secondary 2' onClick ={() => console.log('Secondary 2')} className='secondary2' disabled={false}/>
      <Button text = 'Button with icon' onClick ={() => console.log('Button with icon')} className='bvi' disabled={false} image={image}/>
      <Button text = '' onClick ={() => console.log('like down')} className='likeDown' disabled={false} image={image}/>
      <Button text = '' onClick ={() => console.log('like up')} className='likeUp' disabled={false} image={image2}/>
    </div>
  )
}

export default App;
