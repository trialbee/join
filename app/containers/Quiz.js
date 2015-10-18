
import React from 'react';
import { connect } from 'react-redux';

import {
    answer,
    abort
} from 'services/quiz-service';

import { saveProfile } from 'services/firebase-service';
import { setThankyourStatus } from 'actions/app-actions';
import { setCanAnswer } from 'actions/quiz-actions';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Fade from 'react-bootstrap/lib/Fade';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { FullscreenGrid } from 'components/FullscreenGrid';
import { QuizQuestions } from 'components/QuizQuestions';
import { QuizResults } from 'components/QuizResults';

@connect(s => s)
export class Quiz extends React.Component {

    requestAnswer = e => {
        e.preventDefault();
        e.target.blur();
        this.refs.questions.requestAnswer();
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
        var { dispatch, app, quiz } = this.props;
        var { questions, currentQuestion, canAnswer } = quiz;
        
        var showQuestions = app.isPlaying;
        var showResults = currentQuestion >= questions.length;

        var header = (
            <Row>
                <Col xs={6}>
                    <h3>Quiz</h3>
                </Col>
                <Col xs={6} className="text-right">
                    <Fade in={canAnswer}>
                        <Button 
                            bsStyle="primary" 
                            onClick={this.requestAnswer} >
                            <Glyphicon glyph="chevron-right" />
                        </Button>
                    </Fade>
                </Col>
            </Row>
        );

        var footer = (
            <Button 
                bsStyle="danger"
                onClick={$=> dispatch(abort())}
                block >
                Abort!
            </Button>
        );

        return (
            <div>
                <QuizQuestions {...quiz}
                    ref="questions"
                    isVisible={showQuestions}
                    header={header}
                    footer={footer}
                    canAnswer={canAnswer}
                    setCanAnswer={value => dispatch(setCanAnswer(value))}
                    onAnswer={data => dispatch(answer(data))} />
                    
                <QuizResults {...quiz}
                    isVisible={showResults}
                    onSubmit={this.saveProfile}
                    onCancel={$=> dispatch(abort())} />
            </div>
        );
    }
}
