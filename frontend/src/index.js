import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const endpoint = `${document.URL}api/leads/`;
const fetchData = async () => await fetch(endpoint);

fetchData()
  .then((res) => res.json())
  .then((data) => console.log(data));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
