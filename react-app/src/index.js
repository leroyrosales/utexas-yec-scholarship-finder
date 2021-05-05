import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

const DATA_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build/';

axios.get(`${DATA_URL}/data/data.json`)
  .then( res =>
    ReactDOM.render(
      <React.StrictMode>
        <App scholarships={res.data} />
      </React.StrictMode>,
      document.getElementById('yec-root')
    )
  )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
