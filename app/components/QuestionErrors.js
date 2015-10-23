import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

export class QuestionErrors extends React.Component {

    static defaultProps = {
        errors: []
    }

    render() {
        var { errors } = this.props;

        if (errors.length) {
            errors = errors.map((error, i) => <p key={i}>{error}</p>);
            errors = <Panel bsStyle="danger">{errors}</Panel>;
        } else {
            errors = null;
        }

        return errors;
    }
}
