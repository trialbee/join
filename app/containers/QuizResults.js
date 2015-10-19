import React from 'react';
import { connect } from 'react-redux';

// ACTIONS 

import { abort } from 'services/quiz-service';
import { saveProfile } from 'services/firebase-service';
import { setThankyourStatus } from 'actions/app-actions';

// COMPONENTS

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';

import { PersonalDataForm } from 'components/PersonalDataForm';

@connect(s => s)
export class QuizResults extends React.Component {

    save = $=> {
        var { dispatch, app, quiz } = this.props;
        var { isPlaying } = app;
        var { answers } = quiz;
        var data = { ...this.refs.profile.getData(), answers };

        // save -- add an error callback here?
        dispatch(saveProfile(data));

        // confirm UX
        dispatch(setThankyourStatus(true));
        setTimeout($=> dispatch(setThankyourStatus(false)), 1500);
        setTimeout($=> dispatch(abort()), 1500);
    }

    render() {
        var { dispatch, app, quiz } = this.props;
        var { isPlaying } = app;
        var {questions, currentQuestion } = quiz;

        var isVisible = isPlaying && currentQuestion >= questions.length;

        var header = (
            <h3>You did it!</h3>
        );

        var footer = (
            <div className="text-right">
                <Button bsStyle="link" onClick={$=> dispatch(abort())}>cancel</Button>
                <Button bsStyle="success" onClick={this.save}>Apply!</Button>
            </div>
        );
        
        return (
            <FullscreenGrid
                slideDirection="right" 
                isVisible={isVisible}
                header={header} 
                footer={footer}>

                <p className="lead">
                    You are a great guy and we&prime;d love to have you onboard!
                </p>
                <p className="lead">
                    Please fill up those informations and we&prime;ll call you back <i>asap</i>.
                </p>

                <PersonalDataForm ref="profile" onSubmit={this.save} />
            </FullscreenGrid>
        );
    }
}
