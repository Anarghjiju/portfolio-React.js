// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're using the correct import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css'; // Ensure you are importing your CSS file

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
