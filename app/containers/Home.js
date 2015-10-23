import React from 'react';
import { connect } from 'react-redux';

import { start as startQuiz } from 'services/quiz-service';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'components/Button';

import logo from 'assets/tblogo.png';

console.log(logo);

@connect(s => s.app)
export class Home extends React.Component {
    render() {
        var { dispatch, isPlaying } = this.props;

        var header = (
            <div className="text-center" style={{marginTop: 15}}>
                <img src={logo} />
            </div>
        );

        var footer = (
            <Button 
                bsStyle="success"
                bsSize="large"
                onTap={$=> dispatch(startQuiz())}
                block>apply now <Glyphicon glyph="chevron-right" /></Button>
        );

        return (
            <FullscreenGrid 
                slideDirection="left" 
                isVisible={!isPlaying}
                header={header}
                footer={footer} >
                    
                <div style={{marginTop:'20%',marginBottom:50}}>
                    <h2 className="trialbee-title">TrialBee is Hiring!</h2>
                    <p>Come with us, You'll have fun!</p>

                </div>
                

            </FullscreenGrid>
        );
    }
}
