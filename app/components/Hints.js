import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

export class Hints extends React.Component {

    static defaultProps = {
        hints: []
    }

    render() {
        var classes = ['card-hints'];
        var { hints } = this.props;

        if (hints && hints.length) {
            hints = hints.map(hint => (
                <p key={hint.id} dangerouslySetInnerHTML={{__html:hint.msg}} />
            ));
            hints = <Panel bsStyle="info" style={{marginTop: 20}}>{hints}</Panel>;
        }

        return (
            <div>
                {hints}
            </div>
        );
    }
}
