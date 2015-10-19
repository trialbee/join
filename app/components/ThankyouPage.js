import React from 'react';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';

export class ThankyouPage extends React.Component {
    render() {
        var { isVisible, onConfirm } = this.props;

        return (
            <FullscreenGrid
                slideDirection="right" 
                isVisible={isVisible}>
                
                <div className="text-center" style={{marginTop:'30%'}}>
                    <h3>Thank You!</h3>
                    <p className="lead">
                        We will come back to you <i>asap</i>!
                    </p>
                </div>

            </FullscreenGrid>
        );
    }
}
