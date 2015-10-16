
import React from 'react';
import { connect } from 'react-redux';

import {
    answer,
    abort
} from 'services/quiz-service';

import { saveProfile } from 'services/firebase-service';
import { setThankyourStatus } from 'actions/app-actions';


import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';

import { QuizQuestions } from 'components/QuizQuestions';
import { QuizResults } from 'components/QuizResults';

@connect(s => s)
export class Quiz extends React.Component {

    // cache header and footer
    componentWillMount() {
        var { dispatch } = this.props;

        this.header = (
            <h3>Quiz</h3>
        );

        this.footer = (
            <Button 
                bsStyle="danger"
                onClick={$=> dispatch(abort())}
                block >
                Abort!
            </Button>
        );
    }

    saveProfile = data => {
        var { dispatch } = this.props;

        // save -- add an error callback here?
        dispatch(saveProfile(data));

        // confirm UX
        dispatch(setThankyourStatus(true));
        setTimeout($=> dispatch(setThankyourStatus(false)), 1500);
        setTimeout($=> dispatch(abort()), 500);
    }

    render() {
        var { header, footer } = this;
        var { dispatch, app, quiz } = this.props;
        var { questions, currentQuestion } = quiz;
        
        var showQuestions = app.isPlaying;
        var showResults = currentQuestion >= questions.length;

        return (
            <div>
                <QuizQuestions {...quiz}
                    isVisible={showQuestions}
                    header={header}
                    footer={footer}
                    onAnswer={data => dispatch(answer(data))} />
                    
                <QuizResults {...quiz}
                    isVisible={showResults}
                    onSubmit={this.saveProfile}
                    onCancel={$=> dispatch(abort())} />
            </div>
        );
    }
}
