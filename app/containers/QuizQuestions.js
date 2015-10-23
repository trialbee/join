import React from 'react';
import { connect } from 'react-redux';

// ACTIONS

import {
    answer,
    abort
} from 'services/quiz-service';

import { setCanAnswer } from 'actions/quiz-actions';

// COMPONENTS

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Fade from 'react-bootstrap/lib/Fade';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { FullscreenGrid } from 'components/FullscreenGrid';
import { QuizCard } from 'components/QuizCard';
import Button from 'components/Button';

@connect(s => s)
export class QuizQuestions extends React.Component {

    requestAnswer = e => {
        e.preventDefault();
        e.currentTarget.blur();
        this.refs.card.requestAnswer();
    }

    render() {
        var { dispatch, app, quiz } = this.props;
        var { isPlaying } = app;
        var { isActive, canAnswer, questions, currentQuestion } = quiz;

        // prevent to try to show a module over the questions limit
        if (currentQuestion >= questions.length) {
            currentQuestion = questions.length - 1;
        }

        var header = (
            <Row>
                <Col xs={6}>
                    <h3>Quiz</h3>
                </Col>
                <Col xs={6} className="text-right">
                    <Fade in={canAnswer}>
                        <Button onTap={this.requestAnswer}
                            bsStyle="primary" >
                            <span>Next </span>
                            <Glyphicon glyph="chevron-right" />
                        </Button>
                    </Fade>
                </Col>
            </Row>
        );

        var footer = (
            <Button onTap={$=> dispatch(abort())}
                bsStyle="link"
                block >
                Abort Quiz
            </Button>
        );

        var question = questions[currentQuestion];

        var cards = (
            <QuizCard key={question.id + currentQuestion} 
                ref="card"
                prog={currentQuestion}
                total={questions.length}
                question={question} 
                canAnswer={canAnswer}
                setCanAnswer={value => dispatch(setCanAnswer(value))}
                onAnswer={data => dispatch(answer(data))} />
        );

        var content = (
            <ReactCSSTransitionGroup
                transitionName="card"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                {[cards]}
            </ReactCSSTransitionGroup>
        );

        // ugly quick fix to the re-rendering problem
        if (!isActive) {
            content = null;
        }
        
        return (
            <FullscreenGrid 
                slideDirection="right" 
                isVisible={isPlaying} 
                header={header}
                footer={footer}>

                {content}
            </FullscreenGrid>
        );
    }
}
