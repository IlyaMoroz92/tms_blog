import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* export {Textarea} from './components/Textarea/Textarea'
export { PostCard} from './components/PostCard/PostCard'
export {Input} from './components/Input/Input'
export { Button} from './components/Button/Button'
export { Likes} from './components/Likes/Likes'
export { Article} from './components/Article/Article'
export { Picture} from './components/Picture/Picture' */


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
