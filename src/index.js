import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'

import App from './App';
import './index.css';

render(
        <Provider>
        <App />
        </Provider>,
    document.getElementById('root')
);
