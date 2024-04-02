import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { ItemProvider } from './contexts/events-reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ItemProvider>

  </React.StrictMode>
);

