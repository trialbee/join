import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import { FullscreenGrid } from 'components/FullscreenGrid';
import { QuizCard } from 'components/QuizCard';

export class QuizQuestions extends React.Component {

    static defaultProps = {
        questions: 0,
        currentQuestion: 0,
        canAnswer: true,
        setCanAnswer: $=> {},
        onAnswer: $=> {}
    };

    requestAnswer = $=> {
        this.refs.card.requestAnswer();
    }

    render() {

        var {
            header,
            footer,
            isVisible,
            canAnswer,
            setCanAnswer,
            onAnswer, 
            questions, 
            currentQuestion 
        } = this.props;

        // prevent to try to show a module over the questions limit
        if (currentQuestion >= questions.length) {
            currentQuestion-= 1;
        }

        var cards = [(
            <QuizCard key={currentQuestion} 
                ref="card"
                prog={currentQuestion}
                total={questions.length}
                question={questions[currentQuestion]} 
                canAnswer={canAnswer}
                setCanAnswer={setCanAnswer}
                onAnswer={onAnswer} />
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
