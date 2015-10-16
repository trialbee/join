import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';

export class QuizResults extends React.Component {

    static defaultProps = {
        answers: [],
        onAnswer: data => {}
    };

    render() {

        var { isVisible, onConfirm } = this.props;
        
        return (
            <FullscreenGrid
                slideDirection="bottom" 
                isVisible={isVisible} >
                <p>results</p>
                <Button onClick={$=> onConfirm()}>Ok, done!</Button>
            </FullscreenGrid>
        );
    }
}
