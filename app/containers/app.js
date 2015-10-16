
import React from 'react';
import { connect } from 'react-redux';

import { initFirebase } from 'services/firebase-service';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import { Home } from 'containers/Home';
import { Quiz } from 'containers/Quiz';

@connect(s => s)
export class App extends React.Component {

    componentWillMount() {
        this.props.dispatch(initFirebase());
    }

    render() {
        return (
            <div>
                <Quiz />
                <Home />
            </div>
        );
    }
}
