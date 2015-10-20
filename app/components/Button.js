import React from 'react';
import BootstrapButton from 'react-bootstrap/lib/Button';

const isMobile = typeof window.orientation !== 'undefined';

export default class Button extends React.Component {

    static defaultProps = {
        onTap: () => {}
    }

    render() {
        var props = {...this.props};

        var onTap = e => {
            e.preventDefault();
            e.target.blur();
            props.onTap(e);
        }

        if (isMobile) {
            props.onTouchStart = onTap;
        } else {
            props.onClick = onTap;
        }

        return <BootstrapButton {...props} />;
    }
}
