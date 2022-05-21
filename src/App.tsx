
import React from 'react';
import './App.scss';
import { Button } from './components/Button';
import { ReactComponent as Down} from './components/Button/img/Down.svg' 
import { ReactComponent as Bookmark} from './components/Button/img/Bookmark.svg' 
import { ReactComponent as Up} from './components/Button/img/Down.svg' 
import { Input } from './components/Input';
import { Header } from './components/Header';
import {NavLink} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import { Blog } from "./pages/Blog/blog";
import  Layout  from './components/Layout/Layout';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
      <Blog />
      {/* <Input
        type='password'
      /> */}
    </div>
    
  );
}

export default App