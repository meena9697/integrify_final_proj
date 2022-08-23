import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reduxStore from "./redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientID = process.env.REACT_APP_CLIENT_ID as string
ReactDOM.render(
  <Provider store={ reduxStore }>
  <React.StrictMode>
  <Router>
    <GoogleOAuthProvider clientId={clientID}>
      <App />
      </GoogleOAuthProvider>
      </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
