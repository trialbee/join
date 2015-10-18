/**
 * this can probably be removed
 */

import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import { QuestionText } from 'components/QuestionText';

const questionTypes = {
    text: QuestionText
};

export class QuizCard extends React.Component {

    static defaultProps = {
        canAnswer: true,
        setCanAnswer: $=> {},
        onAnswer: $=> {}
    }

    requestAnswer = $=> {
        this.refs.question.requestAnswer();
    }

    render() {
        var { question } = this.props;
        var Question = questionTypes[question.type];

        return (
            <div className="card">
                <Grid>
                    <Question {...this.props} {...question} ref="question" />
                </Grid>
            </div>
        );
    }
}