import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Items1 from './components/items/items1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Routess() {
  return(
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/items1" element={<Items1 />} />
      </Routes>
    </Router>
  )
}

export default Routess;


