import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Button from 'react-bootstrap/lib/Button';

import { FullscreenGrid } from 'components/FullscreenGrid';

export class QuizQuestions extends React.Component {

    static defaultProps = {
        questions: 0,
        currentQuestion: 0,
        onAnswer: data => {}
    };

    render() {

        var {
            header,
            footer,
            isVisible,
            onAnswer, 
            questions, 
            currentQuestion 
    } = this.props;

        // prevent to try to show a module over the questions limit
        if (currentQuestion >= questions) {
            currentQuestion-= 1;
        }

        var cards = [(
            <div key={currentQuestion}>
                <p>Question N. <b>{currentQuestion + 1} / {questions}</b></p>
                <Button onClick={$=> onAnswer({})}>next</Button>
            </div>
        )];
        
        return (
            <FullscreenGrid 
                slideDirection="right" 
                isVisible={isVisible} 
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
