import React from 'react';

class ErrorBoundry extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };

    }

    render() {
        if (this.state.hasError) {
            return <h1> Ooops. That is Wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;