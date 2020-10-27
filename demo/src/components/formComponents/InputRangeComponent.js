import React from 'react';
import './InputRangeComponent.css';
import PropTypes from 'prop-types';

function InputRangeComponent({ min, max, value, onChange, rangeName, measureUnit }) {
  return (
    <div className="div-vertical-label-input">
      <p>{rangeName}</p>
      <input
        className="number-counter range-slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      ></input>
      <p className="output-value">{`${value} ${measureUnit}`}</p>
    </div>
  );
}

InputRangeComponent.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  rangeName: PropTypes.string.isRequired,
  measureUnit: PropTypes.string.isRequired,
};

export default InputRangeComponent;
