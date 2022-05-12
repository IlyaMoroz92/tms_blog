import './App.css';
import { Input } from './Input';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
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


      <nav>
        <Link to='post'>Posts</Link>
        <Link to='post/1'>Post 1</Link>
        <Link to='post/add'>Post 1</Link>
        <Link to='/search'>Search</Link>
      </nav>
    </div>
  );
}



export default App;
