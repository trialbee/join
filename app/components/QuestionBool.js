import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Button from 'components/Button';

import { QuestionHelper } from 'components/QuestionHelper';
import { QuestionErrors } from 'components/QuestionErrors';

import { validate } from 'utils/validations';

function __noop() {}

export class QuestionBool extends React.Component {

    static defaultProps = {
        setCanAnswer: __noop,
        setCardStatus: __noop,
        onAnswer: __noop
    }

    componentWillMount() {
        this.props.setCanAnswer(false);
    }

    answer = value => {
        this.props.setCardStatus(true);
        setTimeout($=> this.props.onAnswer(value), 300);
    }

    render() {
        var { question, helper, canAnswer } = this.props;

        return (
            <div>
                <h4 className="trialbee-title">{question}</h4>
                <QuestionHelper text={helper} />
                <hr />
                <Row>
                    <Col xs={6} className="text-center">
                        <Button onTap={$=> this.answer('N')} bsStyle="danger">
                            <Glyphicon glyph="remove" />
                        </Button>
                    </Col>
                    <Col xs={6} className="text-center">
                        <Button onTap={$=> this.answer('Y')} bsStyle="success">
                            <Glyphicon glyph="ok" />
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}