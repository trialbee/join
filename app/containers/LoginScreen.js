import React from 'react';
import { connect } from 'react-redux';

import { login } from 'services/firebase-service';

import Button from 'react-bootstrap/lib/Button';

@connect(s => s.app)
export class LoginScreen extends React.Component {

    state = {
        hasError: false
    }

    onClick = e => {
        e.target.blur();
        this.props.dispatch(login(err => {
            if (err) {
                this.setState({hasError: true});

                clearTimeout(this._animation);
                this._animation = setTimeout($=> {
                    this.setState({hasError: false});
                }, 1000);
            }
        }));
    }

    render() {
        var { isLoggedIn } = this.props;

        var className = isLoggedIn ? '' : ' login-screen--active';
        className = 'login-screen' + className;

        var btnClassName;
        if (this.state.hasError) {
            btnClassName = 'animated shake';
        }

        return (
            <div className={className}>
                <Button 
                    bsStyle="primary"
                    bsSize="large"
                    className={btnClassName}
                    onClick={this.onClick}>
                    Login with Facebook</Button>
            </div>
        );
    }
}
