import React from 'react';
import { connect } from 'react-redux';

// ACTIONS 

import { abort } from 'services/quiz-service';
import { saveProfile } from 'services/firebase-service';
import { setThankyourStatus } from 'actions/app-actions';

// COMPONENTS

import { FullscreenGrid } from 'components/FullscreenGrid';

import { PersonalDataForm } from 'components/PersonalDataForm';
import Button from 'components/Button';

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
            <div className="text-right" style={{marginTop:10}}>
                <Button onTap={$=> dispatch(abort())} bsStyle="link">cancel</Button>
                <Button onTap={this.save} bsStyle="success">Apply!</Button>
            </div>
        );
        
        return (
            <FullscreenGrid
                slideDirection="right" 
                isVisible={isVisible}
                header={header} 
                footer={footer}>

                <p className="lead">
                    Thanks, you&prime;re awesome!
                </p>
                <p className="lead">
                    Please fill out the form and we&prime;ll contact you.
                </p>

                <PersonalDataForm ref="profile" onSubmit={this.save} />
            </FullscreenGrid>
        );
    }
}
