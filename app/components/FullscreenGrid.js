import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class FullscreenGrid extends React.Component {
    render() {
        return (
            <div className="fullscreen">
                <Grid {...this.props} />
            </div>
        );
    }
}
