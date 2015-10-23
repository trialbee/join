import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Button from 'components/Button';

import { QuestionHelper } from 'components/QuestionHelper';
import { QuestionErrors } from 'components/QuestionErrors';

import { validate } from 'utils/validations';

function __noop() {}

export class QuestionInfo extends React.Component {

    static defaultProps = {
        setCanAnswer: __noop,
        setCardStatus: __noop,
        onAnswer: __noop
    }

    state = {
        isValid: null,
        errors: []
    }

    componentWillMount() {
        this.props.setCanAnswer(false);
    }

    answer = value => {
        setTimeout($=> this.props.onAnswer());
    }

    render() {
        var { question, html, onAnswer } = this.props;

        if (question) {
            question = <h4 className="trialbee-title">{question}</h4>;
        } else {
            question = null;
        }

        if (html) {
            html = <div dangerouslySetInnerHTML={{__html:html}}></div>;
        } else {
            html = null;
        }

        return (
            <div>
                {question}
                {html}
                <hr />
                <div className="text-right">
                    <Button onTap={this.answer} bsStyle="primary">Next <Glyphicon glyph="chevron-right" /></Button>
                </div>
            </div>
        );
    }
}