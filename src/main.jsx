import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './templates/App';
// import MyComponent from './templates/App/teste';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <MyComponent /> */}
  </React.StrictMode>,
)
