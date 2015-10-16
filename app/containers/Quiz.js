
import React from 'react';
import { connect } from 'react-redux';

import {
    answer,
    abort
} from 'services/quiz-service';

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
                onClick={$=> dispatch(abort())} >
                Abort!
            </Button>
        );
    }

    render() {
        var { header, footer } = this;
        var { dispatch, app, quiz } = this.props;
        var { questions, currentQuestion } = quiz;

        var content, results;
        var showQuestions = currentQuestion < questions;
        var showResults = !showQuestions;

        if (showQuestions) {
            content = (
                <QuizQuestions {...quiz} 
                    onAnswer={data => dispatch(answer(data))} />
            );
        }

        return (
            <div>
                <FullscreenGrid 
                    slideDirection="right" 
                    isVisible={app.isPlaying} 
                    header={header}
                    footer={footer}
                    children={content} />
                    
                <QuizResults {...quiz}
                    isVisible={showResults}
                    onConfirm={$=> dispatch(abort())} />
            </div>
        );
    }
}
