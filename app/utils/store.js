
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from 'reducers';
const reducer = combineReducers(reducers);
const middlewares = [reduxThunk];

var store;

export function makeStore(debug = false) {    

    var finalCreateStore;

    if (debug) {
        finalCreateStore = compose(
            applyMiddleware(...middlewares),
            require('redux-devtools').devTools(),
            require('redux-devtools').persistState(
              window.location.href.match(/[?&]debug_session=([^&]+)\b/)
            )
        )(createStore);
    } else {
        finalCreateStore = applyMiddleware(...middlewares)(createStore);
    }

    store = finalCreateStore(reducer);
    return store;
}
