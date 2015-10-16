import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import Button from 'react-bootstrap/lib/Button';

export class QuizResults extends React.Component {

    static defaultProps = {
        answers: [],
        onAnswer: data => {}
    };

    render() {

        var { onConfirm } = this.props;
        
        return (
            <div>
                <p>results</p>
                <Button onClick={$=> onConfirm()}>Ok, done!</Button>
            </div>
        );
    }
}
