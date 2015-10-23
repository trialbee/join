/**
 * this can probably be removed
 */

import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import { QuestionText } from 'components/QuestionText';
import { QuestionMulti } from 'components/QuestionMulti';
import { QuestionInfo } from 'components/QuestionInfo';
import { QuestionBool } from 'components/QuestionBool';

import { Hints } from 'components/Hints';

const questionTypes = {
    text: QuestionText,
    multi: QuestionMulti,
    info: QuestionInfo,
    bool: QuestionBool
};

export class QuizCard extends React.Component {

    static defaultProps = {
        canAnswer: true,
        setCanAnswer: $=> {},
        onAnswer: $=> {}
    }

    state = {
        cardStatus: null,
        isShaking: false,
        errors: 0
    }

    requestAnswer = $=> {
        this.refs.question.requestAnswer();
    }

    setCardStatus = cardStatus => {
        var { errors, isShaking } = this.state;
        if (cardStatus === false) {
            isShaking = true;
            errors++;
        } else {
            isShaking = false;
        }
        this.setState({cardStatus, isShaking, errors});
        setTimeout($=> this.setState({isShaking:false}), 300);
    }

    render() {
        var { question } = this.props;
        var { hints } = question;
        var { cardStatus, isShaking, errors } = this.state;
        
        var Question = questionTypes[question.type];

        var classes = ['card'];
        if (cardStatus !== null) {
            classes.push(cardStatus ? 'card--success' : 'card--error');
        }
        if (isShaking === true) {
            classes.push('animated shake');
        }

        // filter visible hints
        if (hints) {
            hints = hints
                .map((hint, i) => {hint.id = i; return hint })
                .filter(hint => hint.count === errors || (hint.andup && errors > hint.count));
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

                        <Hints hints={hints} />
                    </div>
                </Grid>
            </div>
        );
    }
}