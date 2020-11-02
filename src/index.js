import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './Redux/redux-store';



let rerenderEntireTree = (getState) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state = { getState } 
        store = { store }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let getState = store.getState()
  rerenderEntireTree(getState)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
