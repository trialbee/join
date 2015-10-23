import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Panel from 'react-bootstrap/lib/Panel';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Button from 'components/Button';

import { QuestionHelper } from 'components/QuestionHelper';
import { QuestionErrors } from 'components/QuestionErrors';

import { validate } from 'utils/validations';

function __noop() {}

export class QuestionText extends React.Component {

    static defaultProps = {
        setCanAnswer: __noop,
        setCardStatus: __noop,
        onAnswer: __noop
    }

    state = {
        value: '',
        isValid: null,
        errors: []
    }

    // componentWillMount() {
    //     this.props.setCanAnswer(false);
    // }

    updateValue = e => {
        // this.props.setCanAnswer(e.target.value.length > 0);
        this.setState({
            value: e.target.value,
            isValid: null,
            errors: []
        });

        this.props.setCardStatus(null);
    }

    answer = $=> {
        var { isValid, errors } = validate(this.state.value, this.props.rules);
        this.setState({isValid:isValid, errors:errors});

        if (isValid) {
            setTimeout($=> this.props.onAnswer(this.state.value), 300);
        }

        this.props.setCardStatus(isValid);
    }

    requestAnswer = $=> {
        this.answer();
    }

    render() {
        var { question, placeholder, helper, canAnswer } = this.props;
        var { value, isValid, errors } = this.state;
        
        var bsStyle = null;
        if (isValid === true) {
            bsStyle = 'success';
        }
        if (isValid === false) {
            bsStyle = 'error';
        }

        if (errors.length) {
            errors = errors.map((error, i) => <p key={i}>{error}</p>);
            errors = <Panel header="Errors found!" bsStyle="danger">{errors}</Panel>;
        }

        var nextBtn = (
            <Button onTap={this.answer} 
                bsStyle="primary">
                <span>&nbsp;</span>
                <Glyphicon glyph="ok" />
            </Button>
        );

        return (
            <div>
                <h4 className="trialbee-title">{question}</h4>
                <QuestionHelper text={helper} />
                
                <Input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    bsStyle={bsStyle}
                    onChange={this.updateValue}
                    onFocus={this.updateValue} 
                    buttonAfter={nextBtn} />
                <QuestionErrors errors={this.state.errors} />
            </div>
        );
    }
}