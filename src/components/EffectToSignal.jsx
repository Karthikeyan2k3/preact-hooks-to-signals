import {signal,effect} from '@preact/signals';

const width=signal(window.innerWidth);

effect(() => {
	const onResize = () => {
		width.value = window.innerWidth;
	};

	window.addEventListener("resize", onResize);
	onResize();
});

function EffectToSignal(){
    return (
		<>
			<h2>Signal-based window resizer(converted from useEffect)</h2>
			<p><mark><i>Open DevTools and resize the window to see the signal update the width of the window.</i></mark></p>
			<h3>Window-Width : {width.value}</h3>
		</>
	);
}

export default EffectToSignal;

