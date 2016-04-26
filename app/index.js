import './main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import saveStore from './store/saveStore';

import App from './containers/App.js';
import analyzePlugin from './plugins/analyzeAndInjectPlugin';

//Try to extract previous store state

let currentState = {};
const previousStore = window.localStorage.getItem('currentState');

if (previousStore) {
    try {
        currentState = JSON.parse(previousStore);
    } catch (e) {

    }
}

const store = configureStore(currentState);

analyzePlugin(store);

saveStore(store);

window.store = store;



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
);
