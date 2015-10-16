import React from 'react';

import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';

export class Main extends React.Component {

    static defaultProps = {
        app: null,
        store: null
    }

    state = {
        showDebug: false,
        debugPanel: 0
    }


    componentWillMount() {
        try {
            var initialState = JSON.parse(sessionStorage.getItem('redux-devtools'));
            this.setState(initialState);
        } catch (e) {}
    }

    componentDidMount() {
        document.body.addEventListener('keyup', e => {
            if (e.ctrlKey || e.altKey) {
                switch (e.keyCode) {
                    case 32:
                    case 68:
                        this.setState({showDebug: !this.state.showDebug});
                        break;
                    case 49:
                    case 50:
                    case 51:
                        this.setState({debugPanel: e.keyCode});
                        break;
                }
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('redux-devtools', JSON.stringify(nextState));
    }

    render() {
        
        var provider = (
            <Provider store={this.props.store}>
                {React.createElement(this.props.app)}
            </Provider>
        );

        var debugPanel = LogMonitor;
        var debugOptions = {};
        switch (this.state.debugPanel) {
            case 50: 
                debugPanel = SliderMonitor; 
                debugOptions = {bottom:true, left:true, right:true};
                break;
            default: 
                debugPanel = LogMonitor; 
                debugPanel = LogMonitor; debugOptions = {top:true, bottom:true, right:true};
                break;
        }

        var debug;
        if (this.state.showDebug) {
            debug = (
                <DebugPanel {...debugOptions}>
                    <DevTools store={this.props.store} monitor={debugPanel} />
                </DebugPanel>
            );
        }

        return (
            <div>
                {provider}
                {debug}
            </div>
        );
    }
}
