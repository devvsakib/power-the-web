import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const handleClick = () => {
        props.setDarkMode(!props.darkMode);
    }
    const headingStyle={
        color: props.darkMode ? 'white' : 'black'
    }
    const iconStyle = {
        cursor: 'pointer'
    }
    return (
        <React.Fragment>
            <img src="logo192.png" alt="react" style={iconStyle} onClick={handleClick}/>
            <h1 style={headingStyle}>React Calculator</h1>
        </React.Fragment>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
}
export default Header;
