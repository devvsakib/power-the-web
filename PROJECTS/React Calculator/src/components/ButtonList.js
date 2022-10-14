import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonList = (props)=>{
    return (
        <div>
            {props.operations.map((i) => (
                <Button value={i} 
                screenText={props.screenText} 
                handleClickOperation={props.handleClickOperation} 
                darkMode={props.darkMode}
                key={i}
                />)
                )
            }
        </div>
    )
}

ButtonList.propTypes = {
    operations: PropTypes.array.isRequired,
    screenText: PropTypes.string.isRequired,
    handleClickOperation: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
}

export default ButtonList;