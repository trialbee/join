import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export class PersonalDataForm extends React.Component {

    static defaultProps = {
        onSubmit: $=> {},
        onDataChange: $=> {}
    };

    state = {
        name: '',
        email: '',
        phone: '',
        twitter: '',
        github: '',
        linkedin: '',
        notes: ''
    };

    setFieldValue = field => {
        return e => {
            var state = { ...this.state };
            state[field] = e.target.value;
            this.setState(state);
            this.props.onDataChange(this.state);
        }
    }

    // this doesn't work... why?
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    getData = $=> this.state

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    value={this.state.name}
                    placeholder="What's your name?"
                    onChange={this.setFieldValue('name')} />
                <Input
                    type="email"
                    value={this.state.email}
                    placeholder="What's your email?"
                    onChange={this.setFieldValue('email')} />
                <Input
                    type="text"
                    value={this.state.phone}
                    placeholder="What's your phone?"
                    onChange={this.setFieldValue('phone')} />
                <Input
                    type="text"
                    value={this.state.twitter}
                    placeholder="What's your twitter?"
                    onChange={this.setFieldValue('twitter')} />
                <Input
                    type="text"
                    value={this.state.github}
                    placeholder="What's your github?"
                    onChange={this.setFieldValue('github')} />
                <Input
                    type="text"
                    value={this.state.linkedin}
                    placeholder="What's your linkedin?"
                    onChange={this.setFieldValue('linkedin')} />
                <Input
                    type="textarea"
                    value={this.state.notes}
                    placeholder="Tell us something personal about you!"
                    onChange={this.setFieldValue('notes')} />
            </form>
        );
    }
}
