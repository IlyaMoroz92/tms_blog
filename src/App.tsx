import './App.css';
import { Input } from './Input';
import {NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <button><NavLink to='posts'>Posts</NavLink></button>
        <NavLink to='posts'>Posts</NavLink>
        <NavLink to='posts/1'>Post 1</NavLink>
        <NavLink to='posts/add'>Post Add</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/signin'>SignIn</NavLink>
        <NavLink to='/signup'>SignUp</NavLink>
        <NavLink to='/resetpassword'>ResetPassword</NavLink>
        <NavLink to='/newpassword'>NewPassword</NavLink>
      </nav>
    </div>
  );
}



export default App;
