import React from 'react';
import { connect } from 'react-redux';

import { start as startQuiz } from 'services/quiz-service';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'components/Button';

@connect(s => s.app)
export class Home extends React.Component {
    render() {
        var { dispatch, isPlaying } = this.props;
        return (
            <FullscreenGrid 
                slideDirection="left" 
                isVisible={!isPlaying} >
                
                <h3>TrialBee is Hiring!</h3>
                <p>Come with us, You'll have fun!</p>
                <hr />
                <Button 
                    bsStyle="primary"
                    onTap={$=> dispatch(startQuiz())}
                    block>Apply!</Button>
            </FullscreenGrid>
        );
    }
}
