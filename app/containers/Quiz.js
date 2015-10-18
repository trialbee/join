
import React from 'react';
import { connect } from 'react-redux';

import {
    answer,
    abort
} from 'services/quiz-service';

import { saveProfile } from 'services/firebase-service';
import { setThankyourStatus } from 'actions/app-actions';
import { setCanAnswer } from 'actions/quiz-actions';

import { QuizQuestions } from 'components/QuizQuestions';
import { QuizResults } from 'components/QuizResults';

@connect(s => s)
export class Quiz extends React.Component {

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
        var { dispatch, app, quiz } = this.props;
        var { questions, currentQuestion, canAnswer } = quiz;
        
        var showQuestions = app.isPlaying;
        var showResults = currentQuestion >= questions.length;

        return (
            <div>
                <QuizQuestions {...quiz}
                    ref="questions"
                    isVisible={showQuestions}
                    canAnswer={canAnswer}
                    setCanAnswer={value => dispatch(setCanAnswer(value))}
                    onAnswer={data => dispatch(answer(data))} 
                    onAbort={$=> dispatch(abort())} />
                    
                <QuizResults {...quiz}
                    isVisible={showResults}
                    onSubmit={this.saveProfile}
                    onCancel={$=> dispatch(abort())} />
            </div>
        );
    }
}
