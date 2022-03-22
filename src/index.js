import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.scss';
import './assets/fonts/FontAwesome/css/all.min.css';
import './assets/fonts/OpenSans/opensans.css';
import './assets/fonts/Roboto/roboto.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <App url={document.getElementById('glasses-quiz-widget').getAttribute('data-source')} />
  </React.StrictMode>,
  document.getElementById('glasses-quiz-widget')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
