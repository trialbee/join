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

    state = {
        isHidden: true,
        isTransitioning: false
    }

    componentWillMount() {
        if (this.props.isVisible) {
            this.setState({isHidden:false});
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.isVisible && this.state.isHidden) {
            this.setState({isHidden: false});
        }

        if (!nextProps.isVisible && !this.state.isHidden) {
            this.setState({isHidden: true, isTransitioning: true});
            setTimeout($=> this.setState({isTransitioning: false}), 500);
        }
    }

    render() {

        var { id, slideDirection, isVisible, header, footer } = this.props;
        var { isHidden, isTransitioning } = this.state;
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

        if (isHidden && !isTransitioning) {
            classes.push('fullscreen--hidden');
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
