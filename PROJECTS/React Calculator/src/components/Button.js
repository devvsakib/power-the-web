import React from 'react';
import './styles/Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      className={
        props.darkMode
          ? 'operationButton darkButton'
          : 'operationButton lightButton'
      }
      onClick={props.handleClickOperation.bind(this, props.value)}
      type={props.value === '=' ? 'submit' : 'button'}
    >
      {props.value}
    </button>
  );
};

Button.propTypes = {
  screenText: PropTypes.string.isRequired,
  handleClickOperation: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
}

export default Button;
