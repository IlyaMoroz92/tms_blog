import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Button';
import { ReactComponent as Down} from './components/Button/img/Down.svg' 
import { ReactComponent as Bookmark} from './components/Button/img/Bookmark.svg' 
import { ReactComponent as Up} from './components/Button/img/Down.svg' 
import { ReactComponent as More} from './components/Button/img/More.svg' 
import { Input } from './components/Input';
import { Header } from './components/Header';
/* import {NavLink} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"; */
import { BlogPage } from "./pages/BlogPage/blogPage";
import  Layout  from './components/Layout/Layout';
import { Title } from './components/Title';
import { Likebar } from './components/Likebar';
import { Footer } from './components/Footer';
import { Date } from './components/Date';
import {  Postcard } from './components/Postcard';
import { setTheme } from './redux/reducers/theme';
import { useAppDispatch, useAppSelector } from './redux/hooks';


function App() {
  const theme = useAppSelector(state => state.theme.value)
  /* const dispatch = useAppDispatch() */

  return (
    <div className={`App theme--${theme}`}>
      <BlogPage />
    </div>
  );
}

export default App