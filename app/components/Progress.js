import React from 'react';

import ProgressBar from 'react-bootstrap/lib/ProgressBar';

export class Progress extends React.Component {

    static defaultProps = {
        current: 0,
        total: 0
    }

    render() {
        var { current, total } = this.props;
        var progress = current / total * 100;

        // min progress
        if (progress === 0) {
            progress = 1 / total * 30;
        } else if (current + 1 === total) {
            progress = current / total * 170;
        }

        var bsStyle="info";
        if (progress >= 75) {
            bsStyle="success";
        } else if (progress < 25) {
            bsStyle="warning";
        }

        return (
            <div style={{marginTop:30}}>
                <ProgressBar now={progress} bsStyle={bsStyle} style={{height:2,backgroundColor:'rgba(255,255,255,0.15)'}} />
            </div>
        );
    }
}
