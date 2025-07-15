import { signal } from '@preact/signals'

const count= signal(0);

function StateToSignal(){
    
    if (count.value > 10) {
		throw new Error('Count too high!');
	}
    else if (count.value < 0){
        throw new Error('Count too low!');
    }
    
    return(
        <div>
            <h2>Signal-based Counter(converted from useState)</h2>
            <button onClick={()=>count.value++}>+ Add</button>
            <input readOnly value={count} />
            <button onClick={()=>count.value--}>- Subtract</button>
        </div>
    );
    
}

export default StateToSignal;