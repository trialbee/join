
const __DEBUG__ = true;

// Twitter Bootstrap is included via HTML
require('./index.scss');
require('./assets/animate.css');

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'containers/app';
import { makeStore } from 'utils/store';

var Main = require(__DEBUG__ ? 'utils/main-debug' : 'utils/main').Main;

ReactDOM.render((
    <Main 
        app={App} 
        store={makeStore(__DEBUG__)} />
), document.getElementById('app'));
