import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import Panel from 'react-bootstrap/lib/Panel';

import { validate } from 'utils/validations';

export class QuestionText extends React.Component {

    state = {
        value: '',
        isValid: null,
        errors: []
    }

    updateValue = e => {
        this.setState({
            value: e.target.value,
            isValid: null,
            errors: []
        });
    }

    answer = $=> {
        var { isValid, errors } = validate(this.state.value, this.props.rules);
        this.setState({isValid:isValid, errors:errors});

        if (isValid) {
            setTimeout($=> this.props.answer(this.state.value), 500);
        }
    }

    render() {
        var { question, placeholder } = this.props;
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

        return (
            <div>
                <h3>{question}</h3>
                <Input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    bsStyle={bsStyle}
                    onChange={this.updateValue}
                    onFocus={this.updateValue} />
                <Button onClick={this.answer}>next</Button>
                {errors}
            </div>
        );
    }
}