import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// import RecordsContext from './StateStore/context'
// import recordsReducer from './StateStore/reducer'
import {StateProvider} from './StateStore/StateProvider'
import reducer, {initialState} from './StateStore/reducer'


ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
