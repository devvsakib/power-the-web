function WebDisplay(props) {
    return (
        <div>
            <h1 id="title">Welcome To Granny's Advice</h1>
            <form onSubmit={props.handleSubmit} id="form">
                <input id="input"
                    type="text"
                    placeholder="Enter your symptoms"
                    name="symptoms"
                    value={props.disease.symptoms}
                    onChange={props.handleChange}
                />
                <button id="button">Submit</button>
            </form>
        </div>
    )
}

export default WebDisplay;