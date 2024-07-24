import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DetailProvider } from './context/AdminDetails';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DetailProvider>
        <App />
    </DetailProvider>
);

