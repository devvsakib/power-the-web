import React from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Screen 
                screenText={props.screenText} 
                setScreenText={props.setScreenText}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={[0, 1, 2, 3, 4]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={[5, 6, 7, 8, 9]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={['+', '-', '*', '/','%']}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={['C', '<=', '.','=']}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
        </form>
    )
}

ButtonGroup.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    screenText: PropTypes.string.isRequired,
    setScreenText: PropTypes.func.isRequired,
    handleClickOperation: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default ButtonGroup;
