
const __DEBUG__ = true;

// Twitter Bootstrap is included via HTML
require('./index.scss');
// require('./assets/animate.css');

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'containers/app';
import { makeStore } from 'utils/store';

var Main = require(__DEBUG__ ? 'utils/main-debug' : 'utils/main').Main;

var store = makeStore(__DEBUG__, {
    app: {
        isPlaying: true,
        isThanking: false
    },
    // quiz: {
    //     currentQuestion: 3,
    //     questions: 3,
    //     answers: []
    // }
});

ReactDOM.render((
    <Main 
        app={App} 
        store={store} />
), document.getElementById('app'));

// var foo = true;
// setInterval($=> {
//     foo = !foo;
//     store.dispatch({
//         type: 'quiz@setCanAnswer',
//         value: foo
//     })
// }, 1000);