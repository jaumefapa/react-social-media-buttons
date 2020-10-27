import React from 'react';
import './RadioButtonsComponent.css';
import PropTypes from 'prop-types';

function RadioButtonsComponent({ inputs, inputsNames, className, onClick }) {
  return (
    <div className="radio-toolbar">
      {inputs.map((input, index) => {
        return (
          <div className="input-label">
            <input
              type="radio"
              id={`${input}-preset`}
              name={`radio-${input}`}
              value={input}
              onClick={onClick}
              // checked={value === this.value}
            />
            <label htmlFor={`${input}-preset`}>
              {inputsNames ? inputsNames[index] : input.charAt(0).toUpperCase() + input.slice(1)}
            </label>
          </div>
        );
      })}
    </div>
  );
}

RadioButtonsComponent.propTypes = {
  inputs: PropTypes.array.isRequired,
  inputsNames: PropTypes.array,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default RadioButtonsComponent;
