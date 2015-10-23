import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Panel from 'react-bootstrap/lib/Panel';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Button from 'components/Button';

import { QuestionHelper } from 'components/QuestionHelper';
import { QuestionErrors } from 'components/QuestionErrors';

import { validate } from 'utils/validations';

function __noop() {}

export class QuestionMulti extends React.Component {

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
        var { isValid, errors } = validate(value, this.props.rules);
        this.setState({isValid:isValid, errors:errors});

        if (isValid) {
            setTimeout($=> this.props.onAnswer(this.state.value), 400);
        }

        this.props.setCardStatus(isValid);
    }

    requestAnswer = __noop

    render() {
        var { question, helper, options, canAnswer } = this.props;

        if (options) {
            options = options.map(opt => (
                <Button
                    key={opt.value}
                    onTap={$=> this.answer(opt.value)}
                    children={opt.label} 
                    block />
            ));
        }

        return (
            <div>
                <h4 className="trialbee-title">{question}</h4>
                <QuestionHelper text={helper} />
                {options}
                <QuestionErrors errors={this.state.errors} />
            </div>
        );
    }
}