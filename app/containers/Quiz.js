
import React from 'react';
import { connect } from 'react-redux';

import { stop as stopQuiz } from 'services/quiz-service';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

@connect(s => s.quiz)
export class Quiz extends React.Component {

    render() {
        var { dispatch } = this.props;
        return (
            <FullscreenGrid>
                <p>Quiz</p>
                <Button 
                    bsStyle="danger"
                    onClick={$=> dispatch(stopQuiz())}
                    block>Apply!</Button>
            </FullscreenGrid>
        );
    }
}
