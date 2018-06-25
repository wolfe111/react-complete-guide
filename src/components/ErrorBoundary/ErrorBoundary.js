import React, {Component} from 'react'
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  /*  
    This is called whenever a component that is wrapped inside this component throws an error
  */ 
  componentDidCatch = (error) => {
    this.setState({hasError: true, errorMessage: error})
  }
  render() {
    if(this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      // this is what is wrapped inside of error boundary
      return this.props.children
    }
  }
}

export default ErrorBoundary;