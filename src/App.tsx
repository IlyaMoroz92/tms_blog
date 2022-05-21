
import React from 'react';
import './App.css';
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


function App() {
  return (
    <div className="App">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sed non eius quis consequatur temporibus mollitia unde beatae cupiditate quibusdam iusto ut, eveniet nam repellat blanditiis assumenda voluptatibus consectetur fugit.
    </div>
  );
}

export default App