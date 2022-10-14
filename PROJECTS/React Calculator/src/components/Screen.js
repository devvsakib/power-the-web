import React from 'react';
import "./styles/Screen.css";
import PropTypes from 'prop-types';

const Screen = (props) => {
    const handleInput = (e)=> {
        e.preventDefault();
        props.setScreenText(e.target.value);
    }

    return (
        <div className="screen">
            <input 
                type="text" 
                value={props.screenText} 
                onChange={handleInput} 
                className={props.darkMode ? 'screenInput darkInput' : 'screenInput lightInput'}
            />
        </div>
    )
}

Screen.propTypes={
    screenText: PropTypes.string.isRequired,
    setScreenText: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
}

export default Screen;