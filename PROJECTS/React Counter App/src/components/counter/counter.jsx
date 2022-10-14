import React from "react";

let Counter = ({add, sub, double}) => {
    const [counter, setCounter] = React.useState(0);
    let handleCounter = (value) => {
        setCounter(counter + value)
    }
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="text-uppercase text-info h1 ">Counter</h1>
                <div className="text-success display-3 my-4  font-weight-bold">{counter}</div>
                <button className="btn btn-primary mx-2 border border-success" onClick={() => handleCounter(add)}>Increment</button>
                <button className="btn btn-danger mx-2 border border-primary" onClick={() => handleCounter(sub)}>Decrement</button>
                <button className="btn btn-warning mx-2 border border-danger" onClick={() => handleCounter(double)}>Double</button>
            </div>
            
        </>
    );
}

export default Counter;