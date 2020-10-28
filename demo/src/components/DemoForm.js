import React from 'react';
import './DemoForm.css';
import LinkComponent from './formComponents/LinkComponent';
import RadioButtonsComponent from './formComponents/RadioButtonsComponent';
import InputRangeComponent from './formComponents/InputRangeComponent';
import InputColorComponent from './formComponents/InputColorComponent';
import PropTypes from 'prop-types';
import presetFormatsDb from '../presetFormats';

function DemoForm({
  props,
  updateLinksArray,
  deleteIcon,
  moveIconUp,
  moveIconDown,
  setPresetFormat,
}) {
  const [
    links,
    iconSpace,
    buttonSize,
    color,
    backgroundColor,
    borderRadius,
    borderStyle,
    borderThickness,
    borderColor,
    openNewTab,
  ] = props;

  const availablePresetFormats = Object.keys(presetFormatsDb);
  availablePresetFormats.push('custom');

  const availableArefTargetsInputs = [true, false];
  const availableArefTargetsNames = ['On', 'Off'];

  const availableBorderStyles = ['none', 'solid', 'dashed', 'dotted', 'groove', 'ridge'];

  return (
    <div className="form-container">
      {/* >>> LINK <<< */}
      <div className="form-div">
        <h2>Links</h2>
        <div className="inputs-div drag-drop-container">
          {links.map((link, index) => {
            return (
              <LinkComponent
                key={index}
                index={index}
                link={link}
                links={links}
                moveIconUp={moveIconUp}
                moveIconDown={moveIconDown}
                updateLinksArray={updateLinksArray}
                deleteIcon={deleteIcon}
              />
            );
          })}
        </div>
      </div>
      {/* >>> OPEN LINKS IN A NEW TAB <<< */}
      <div className="form-div">
        <h2>Open links in new tab</h2>
        <RadioButtonsComponent
          inputs={availableArefTargetsInputs}
          inputsNames={availableArefTargetsNames}
          onClick={openNewTab.onChange}
          checked={true}
          className="radio-new-tab-div"
        />
      </div>
      {/* >>> PRESET FORMATS <<< */}
      <div className="form-div">
        <h2>Preset formats</h2>
        <div className="inputs-div">
          <RadioButtonsComponent
            inputs={availablePresetFormats}
            onClick={setPresetFormat}
            checked={'custom'}
            className="radio-toolbar"
          />
        </div>
      </div>
      {/* >>> LAYOUT <<< */}
      <div className="form-div div-layout">
        <h2>Layout</h2>
        <InputRangeComponent
          min={0}
          max={50}
          value={iconSpace.value}
          onChange={iconSpace.onChange}
          rangeName={'Space between buttons:'}
          measureUnit={'px'}
          // className="div-vertical-label-input"
        />
      </div>
      {/* >>> SIZE <<< */}
      <div className="form-div">
        <h2>Size</h2>
        <div className="inputs-div div-vertical-label-input">
          <InputRangeComponent
            min={25}
            max={100}
            value={buttonSize.value}
            onChange={buttonSize.onChange}
            rangeName={'Button size:'}
            measureUnit={'px'}
            className="div-vertical-label-input"
          />
        </div>
      </div>
      {/* >>> COLOR <<< */}
      <div className="form-div">
        <h2>Color</h2>
        <div className="inputs-div div-horizontal-flex-wrap">
          <InputColorComponent
            value={color.value}
            onChange={color.onChange}
            showTransparency={false}
            inputName={'Logo color:'}
            className="inputs-div div-horizontal-flex-wrap"
          />
          <InputColorComponent
            value={backgroundColor.value}
            onChange={backgroundColor.onChange}
            showTransparency={true}
            inputName={'Background color:'}
            className="inputs-div div-horizontal-flex-wrap"
          />
        </div>
      </div>
      {/* >>> SHAPE STYLE <<< */}
      <div className="form-div">
        <h2>Shape</h2>
        <div className="inputs-div shape-section">
          {/* BORDER-RADIUS */}
          <div className="form-label div-vertical-label-input">
            <InputRangeComponent
              min={0}
              max={50}
              value={borderRadius.value}
              onChange={borderRadius.onChange}
              rangeName={'Border radius:'}
              measureUnit={'px'}
              className="div-vertical-label-input"
            />
          </div>
        </div>
      </div>
      {/* >>> BORDER <<< */}
      <div className="form-div">
        <h2>Border</h2>
        <div className="inputs-div border-section">
          {/* BORDER-STYLE */}
          <div className="inputs-div">
            <RadioButtonsComponent
              inputs={availableBorderStyles}
              onClick={borderStyle.onChange}
              className="radio-toolbar"
              name="radio-border-style"
            />
          </div>
          <div className="radio-toolbar">
            <input
              type="radio"
              id="none"
              name="radio-border-style"
              value="none"
              onChange={borderStyle.onChange}
              checked={borderStyle.value === 'none'}
            />
            <label htmlFor="none">None</label>
            <input
              type="radio"
              id="solid"
              name="radio-border-style"
              value="solid"
              onChange={borderStyle.onChange}
              checked={borderStyle.value === 'solid'}
            />
            <label htmlFor="solid">Solid</label>
            <input
              type="radio"
              id="dashed"
              name="radio-border-style"
              value="dashed"
              onChange={borderStyle.onChange}
            />
            <label htmlFor="dashed">Dashed</label>
            <input
              type="radio"
              id="dotted"
              name="radio-border-style"
              value="dotted"
              onChange={borderStyle.onChange}
            />
            <label htmlFor="dotted">Dotted</label>
            <input
              type="radio"
              id="groove"
              name="radio-border-style"
              value="groove"
              onChange={borderStyle.onChange}
            />
            <label htmlFor="groove">Groove</label>
            <input
              type="radio"
              id="ridge"
              name="radio-border-style"
              value="ridge"
              onChange={borderStyle.onChange}
            />
            <label htmlFor="ridge">Ridge</label>
          </div>
          {/* BORDER-THICKNESS */}
          <div className="form-label div-vertical-label-input">
            <InputRangeComponent
              min={0}
              max={10}
              value={borderThickness.value}
              onChange={borderThickness.onChange}
              rangeName={'Border thickness:'}
              measureUnit={'px'}
              className="div-vertical-label-input"
            />
          </div>
          {/* BORDER-COLOR */}
          <InputColorComponent
            value={borderColor.value}
            onChange={borderColor.onChange}
            showTransparency={false}
            inputName={'Border color:'}
            className="inputs-div div-horizontal-flex-wrap"
          />
        </div>
      </div>
      {/* >>> HOVER <<< */}
      {/* <div className="form-div">
        <h2>Hover</h2>
        <div className="inputs-div border-section">
          HOVER-COLORS
          <div className="hover-colors"></div>
          HOVER-TRANSFORM
          <div className="hover-transform"></div>
        </div>
      </div> */}
    </div>
  );
}

DemoForm.propTypes = {
  props: PropTypes.array.isRequired,
  updateLinksArray: PropTypes.func,
  deleteIcon: PropTypes.func.isRequired,
  moveIconUp: PropTypes.func.isRequired,
  moveIconDown: PropTypes.func.isRequired,
  setPresetFormat: PropTypes.func.isRequired,
};

export default DemoForm;
