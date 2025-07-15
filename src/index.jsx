import { render } from 'preact';
import ErrorBoundary from './components/ErrorBoundary';
import StateToSignal from './components/StateToSignal';
import EffectToSignal from './components/EffectToSignal';
import ReducerToSignal from './components/ReducerToSignal';
import ContextToSignal from './components/ContextToSignal';

export function App() {
	return (
		<>
			<h1>Signals vs Hooks</h1>
			<ErrorBoundary>
				<StateToSignal/>
				<EffectToSignal />
				<ReducerToSignal />
				<ContextToSignal />
			</ErrorBoundary>
		</>
	);
}


render(<App />, document.getElementById('app'));
