import React from 'react';

export class QuestionHelper extends React.Component {

    static defaultProps = {
        text: null
    }

    render() {
        var { text } = this.props;

        if (text) {
            text = <p>{text}</p>
        }

        return text;
    }
}
