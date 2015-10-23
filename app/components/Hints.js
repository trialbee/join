import React from 'react';

export class Hints extends React.Component {

    static defaultProps = {
        hints: []
    }

    render() {
        var classes = ['card-hints'];
        var { hints } = this.props;

        hints = hints.map(hint => (
            <p key={hint.id}>{hint.msg}</p>
        ));

        return (
            <div>
                {hints}
            </div>
        );
    }
}
