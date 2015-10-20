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

    state = {
        cardStatus: null
    }

    requestAnswer = $=> {
        this.refs.question.requestAnswer();
    }

    setCardStatus = value => {
        console.log('status', value);
        this.setState({cardStatus: value});
    }

    componentWillMount() {
        console.log('mount card');
    }

    render() {
        console.log('render card');
        var { question } = this.props;
        var { cardStatus } = this.state;

        if (question === undefined) {
            console.warn("PROBLEM!");
            return null;
        }
        
        var Question = questionTypes[question.type];

        var classes = ['card'];
        if (cardStatus !== null) {
            classes.push(cardStatus ? 'card--success' : 'card--error');
        }

        return (
            <div className={classes.join(' ')}>
                <Grid>
                    <div className="card-wrapper">
                        <Question 
                            {...this.props} 
                            {...question} 
                            ref="question"
                            setCardStatus={this.setCardStatus} />
                    </div>
                </Grid>
            </div>
        );
    }
}