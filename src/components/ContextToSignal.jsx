import { signal } from "@preact/signals";

const theme=signal('dark');

function ToggleTheme(){
    theme.value = theme.value === 'dark' ? 'light' : 'dark' ;
}

function ContextToSignal(){
    return(
        <>
            <h2>Signal-based toggler(converted from useContext)</h2>
            <h2>Browser Theme : {theme.value}</h2>
            <button onClick={ToggleTheme}>Toggle</button>
        </>
    )
}

export default ContextToSignal;
 