import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
<<<<<<< HEAD
import store from './store';
=======
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> eae8129d3fa84665935a42e12cf4190fd5162ee8

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
