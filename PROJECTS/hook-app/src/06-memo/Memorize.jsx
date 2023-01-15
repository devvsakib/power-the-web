import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from './Small';

const heavyStuff= (iterationNumber = 1000) => {    
    for( let i=0; i < iterationNumber; i++){
        console.log('Iteraciones');
    }
    return `${iterationNumber} Iteraciones Realizadas`;
}

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(false);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
        <h1>Counter: <Small value={counter}/></h1>
        <h1>{memorizedValue}</h1>
        <button className="btn btn-primary" onClick={ () => increment() }>+1</button>
        <button className="btn btn-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
