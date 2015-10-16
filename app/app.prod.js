
// Twitter Bootstrap is included via HTML
require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'containers/app';
import { makeStore } from 'utils/store';

import { Main } from 'utils/main';

ReactDOM.render((
    <Main 
        app={App} 
        store={makeStore(false)} />
), document.getElementById('app'));
