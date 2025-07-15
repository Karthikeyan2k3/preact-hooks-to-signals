import { signal } from '@preact/signals';

const count=signal(0);

function ReducerToSignal(){
    
    if (count.value > 10) {
		throw new Error('Count too high!');
	}
    else if (count.value < 0){
        throw new Error('Count too low!');
    }

    return(
        <>
            <h2>Signal-based Counter(converted from useReducer)</h2>
            <h2>Count : {count.value}</h2>
            <button onClick={()=>count.value++}>+ Add</button>
            <button onClick={()=>count.value--}>- Subtract</button>
            <button onClick={()=>count.value = 0}>Reset</button>
        </>
    );
}

export default ReducerToSignal;