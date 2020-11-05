import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

import bootstrap from 'bootstrap'; //eslint-disable-line
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

const Main = withRouter((props) => <App {...props} />); //eslint-disable-line

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
