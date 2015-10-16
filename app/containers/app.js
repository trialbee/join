
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
        var { dispatch, app, quiz } = this.props;

        var items = [];

        if (!app.isPlaying) {
            items.push(<Home key="home" />);
        } else {
            items.push(<Quiz key="quiz" />);
        }

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="card"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500} >
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
