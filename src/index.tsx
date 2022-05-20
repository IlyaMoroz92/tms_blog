import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { AddPost } from './pages/AddPost/addPost';
import { Post } from './pages/Post/post';
import { Posts } from './pages/Posts/posts';
import { Search } from './pages/Search/search';
import { SignIn } from './pages/SignIn/signIn';
import { SignUp } from './pages/SignUp/signUp';
import { ResetPassword } from './pages/ResetPassword/resetPassword';
import { NewPassword } from './pages/NewPassword/newPassword';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/add' element={<AddPost />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/search' element={<Search />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route
            path='*'
            element={
              <main style={{padding: '1rem'}}>
              <p>404 Not Found</p>
              </main>
            }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
