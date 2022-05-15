import './App.css';
import { Input } from './Input';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='posts'>Posts</Link>
        <Link to='posts/1'>Post 1</Link>
        <Link to='posts/add'>Post Add</Link>
        <Link to='/search'>Search</Link>
        <Link to='/signin'>SignIn</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/resetpassword'>ResetPassword</Link>
        <Link to='/newpassword'>NewPassword</Link>
      </nav>
    </div>
  );
}



export default App;
