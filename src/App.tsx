import './App.css';
import { Input } from './Input';

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
    </div>
  );
}



export default App;
