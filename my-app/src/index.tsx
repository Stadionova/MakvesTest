import React from 'react';
import ReactDOM from 'react-dom/client';

import {AppWrapper} from "./App/AppWrapper";

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppWrapper/>
    </React.StrictMode>
);
