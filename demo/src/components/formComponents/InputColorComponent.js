import React from 'react';
import './InputColorComponent.css';
import PropTypes from 'prop-types';

function InputColorComponent({ value, onChange, showTransparency, inputName }) {
  return (
    <div className="div-vertical-label-input">
      <label className="form-label">{inputName}</label>
      <div className="color-picker-transparency-button">
        <input className="input-color" type="color" value={value} onChange={onChange}></input>
        {showTransparency && (
          <button className="material-icons background-icon" value="transparent" onClick={onChange}>
            {value === 'transparent' ? `grid_off` : `grid_on`}
          </button>
        )}
      </div>
      <p className="output-value">
        {typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1)}
      </p>
    </div>
  );
}

InputColorComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showTransparency: PropTypes.func,
  inputName: PropTypes.array,
};

export default InputColorComponent;
