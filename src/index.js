import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './18n'

import { App } from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
);