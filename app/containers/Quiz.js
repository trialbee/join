
import React from 'react';
import { connect } from 'react-redux';

import {
    answer,
    abort
} from 'services/quiz-service';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

@connect(s => s)
export class Quiz extends React.Component {

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
        var { dispatch, app, quiz } = this.props;
        var { header, footer } = this;

        return (
            <FullscreenGrid 
                slideDirection="right" 
                isVisible={app.isPlaying} 
                header={header}
                footer={footer}>

                
                <p>Question N. <b>{quiz.currentQuestion + 1} / {quiz.questions}</b></p>
                <Button onClick={$=> dispatch(answer())}>next</Button>


            </FullscreenGrid>
        );
    }
}
