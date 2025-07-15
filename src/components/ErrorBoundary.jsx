import { Component } from "preact";

class ErrorBoundary extends Component {

	constructor() {
		super();
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error, info) {
		console.error('Caught error:', error, info);
	}
	render() {
		if (this.state.hasError) {
			return <h2>Something went wrong</h2>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

