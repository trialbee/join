import React from 'react';

import { FullscreenGrid } from 'components/FullscreenGrid';
import Button from 'react-bootstrap/lib/Button';

import { PersonalDataForm } from 'components/PersonalDataForm';

export class QuizResults extends React.Component {

    static defaultProps = {
        answers: [],
        onSubmit: $=> {},
        onCancel: $=> {}
    };

    save = $=> {
        this.props.onSubmit({
            ...this.refs.profile.getData(),
            answers: this.props.answers
        });
    }

    render() {
        var { isVisible, onCancel } = this.props;

        var footer = (
            <div className="text-right">
                <Button bsStyle="link" onClick={onCancel}>cancel</Button>
                <Button bsStyle="success" onClick={this.save}>Apply!</Button>
            </div>
        );
        
        return (
            <FullscreenGrid
                slideDirection="bottom" 
                isVisible={isVisible}
                header={<h3>You did it!</h3>} 
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
