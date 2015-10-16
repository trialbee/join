
import React from 'react';
import { connect } from 'react-redux';

import { stop as stopQuiz } from 'services/quiz-service';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

@connect(s => s)
export class Quiz extends React.Component {

    render() {
        var { dispatch, app } = this.props;

        var abortBtn = (
            <Button 
                bsStyle="danger"
                onClick={$=> dispatch(stopQuiz())} >
                Abort!
            </Button>
        );

        var cnt = [];
        for (var i=0; i<100; i++) {
            cnt.push(<p key={i}>{i}</p>);
        }

        return (
            <FullscreenGrid 
                slideDirection="right" 
                isVisible={app.isPlaying} 
                header={<h3>Quiz</h3>}
                footer={abortBtn}>

                
                <p>content of the window</p>
                {cnt}


            </FullscreenGrid>
        );
    }
}
