import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';

export class QuizCard extends React.Component {
    render() {
        var {
            prog,
            total,
            question,
            onAnswer
        } = this.props;

        return (
            <div className="card">
                <Grid>
                    <p>Question N. <b>{prog + 1} / {total}</b></p>
                    <Button onClick={$=> onAnswer({})}>next</Button>
                </Grid>
            </div>
        );
    }
}