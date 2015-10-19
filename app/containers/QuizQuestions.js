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
import Button from 'react-bootstrap/lib/Button';
import Fade from 'react-bootstrap/lib/Fade';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { FullscreenGrid } from 'components/FullscreenGrid';
import { QuizCard } from 'components/QuizCard';

@connect(s => s)
export class QuizQuestions extends React.Component {

    requestAnswer = e => {
        e.preventDefault();
        e.target.blur();
        this.refs.card.requestAnswer();
    }

    render() {

        var { dispatch, app, quiz } = this.props;
        var { isPlaying } = app;
        var { canAnswer, questions, currentQuestion } = quiz;
            
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

        var cards = [(
            <QuizCard key={currentQuestion} 
                ref="card"
                prog={currentQuestion}
                total={questions.length}
                question={questions[currentQuestion]} 
                canAnswer={canAnswer}
                setCanAnswer={value => dispatch(setCanAnswer(value))}
                onAnswer={data => dispatch(answer(data))} />
        )];
        
        return (
            <FullscreenGrid 
                slideDirection="right" 
                isVisible={isPlaying} 
                header={header}
                footer={footer}>
            
                <ReactCSSTransitionGroup
                    transitionName="card"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    {cards}
                </ReactCSSTransitionGroup>
            </FullscreenGrid>
        );
    }
}
