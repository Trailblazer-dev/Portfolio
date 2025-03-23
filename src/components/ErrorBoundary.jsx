import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Component Error:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-6 m-4 border-2 border-red-500 bg-red-100 rounded-lg text-red-800">
          <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
          <details className="whitespace-pre-wrap">
            <summary className="cursor-pointer font-semibold mb-2">Show error details</summary>
            <p className="mt-2 text-sm">{this.state.error && this.state.error.toString()}</p>
            <div className="mt-4 bg-white p-2 rounded overflow-auto max-h-[300px]">
              <pre className="text-xs">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
            </div>
          </details>
          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
