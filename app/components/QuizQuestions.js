import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Button from 'react-bootstrap/lib/Button';

export class QuizQuestions extends React.Component {

    static defaultProps = {
        questions: 0,
        currentQuestion: 0,
        onAnswer: data => {}
    };

    render() {

        var { onAnswer, questions, currentQuestion } = this.props;

        var cards = [(
            <div key={currentQuestion}>
                <p>Question N. <b>{currentQuestion + 1} / {questions}</b></p>
                <Button onClick={$=> onAnswer({})}>next</Button>
            </div>
        )];
        
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="card"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    {cards}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
