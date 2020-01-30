import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Упс...Произошли какие-то неполадки</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary