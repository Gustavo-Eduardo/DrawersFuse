import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Drawer from './Drawer/Drawer';
import HolaDrawer from './Drawer/HolaDrawer'
import reportWebVitals from './reportWebVitals';
import NodeContainer from './NodeExample/NodeContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NodeContainer/>
    <Drawer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
