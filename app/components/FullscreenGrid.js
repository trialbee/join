import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class FullscreenGrid extends React.Component {

    static defaultProps = {
        id: null,
        slideDirection: null,
        isVisible: true,
        header: null,
        footer: null
    };

    render() {

        var { id, slideDirection, isVisible, header, footer } = this.props;
        var classes = ['fullscreen'];

        var props = {...this.props};
        delete(props.id);
        
        var content = <Grid {...props} />;

        if (null !== slideDirection) {
            classes.push('fullscreen--' + slideDirection);
        }

        if (isVisible) {
            classes.push('fullscreen--active');
        }

        if (header) {
            header = (
                <div className="fullscreen__header">
                    <Grid {...props}>{header}</Grid>
                </div>
            );
            classes.push('fullscreen--headered');
        }

        if (footer) {
            footer = (
                <div className="fullscreen__footer">
                    <Grid {...props}>{footer}</Grid>
                </div>
            );
            classes.push('fullscreen--footered');
        }

        if (header || footer) {
            content = <div className="fullscreen__content">{content}</div>;
        }

        return (
            <div id={id} className={classes.join(' ')}>
                {header}
                {content}
                {footer}
            </div>
        );
    }
}
