export const ShowIncrement = ({increment}) => {
    console.log("LA funcion se ha recargado");
    return (
        <button
            className="btn btn-primary"
            onClick={() => increment(5)}>Incrementar</button>
    )
}
