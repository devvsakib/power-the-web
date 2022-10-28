import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const selectInput = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese un nombre"
                className="form-control"
            />
            <button 
                className="btn btn-primary"
                onClick={selectInput}
            >
                Set focus
            </button>
        </>
    )
}
