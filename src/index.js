import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import TodoList from '././ToDoApp/ToDo'
import reportWebVitals from './reportWebVitals';
import FilterWork from './FilterWork';

import CalculateApp from './CalculateApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoList/> */}
    {/* <FilterWork/> */}
    <CalculateApp/>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
