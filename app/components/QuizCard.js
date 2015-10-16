import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';


import { QuestionText } from 'components/QuestionText';

const questionTypes = {
    text: QuestionText
};

export class QuizCard extends React.Component {
    render() {
        var {
            prog,
            total,
            question,
            onAnswer
        } = this.props;
        
        var Question = questionTypes[question.type];

        return (
            <div className="card">
                <Grid>
                    <p>Question N. <b>{prog + 1} / {total}</b></p>
                    <hr />
                    <Question {...question} answer={onAnswer} />
                </Grid>
            </div>
        );
    }
}