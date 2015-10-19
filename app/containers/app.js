
import React from 'react';
import { connect } from 'react-redux';

import { initFirebase } from 'services/firebase-service';

import { Home } from 'containers/Home';
import { QuizQuestions } from 'containers/QuizQuestions';
import { QuizResults } from 'containers/QuizResults';

import { ThankyouPage } from 'components/ThankyouPage';

@connect(s => s)
export class App extends React.Component {

    componentWillMount() {
        this.props.dispatch(initFirebase());
    }

    render() {

        var { app } = this.props;

        return (
            <div>
                <QuizQuestions />
                <QuizResults />
                <Home />
                <ThankyouPage isVisible={app.isThanking} />
            </div>
        );
    }
}
