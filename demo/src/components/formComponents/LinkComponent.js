import React from 'react';
// import './LinkComponent.css';
import PropTypes from 'prop-types';

function LinkComponent({
  link,
  links,
  index,
  moveIconUp,
  moveIconDown,
  updateLinksArray,
  deleteIcon,
}) {
  return (
    <div className="drag-drop-item">
      {links.length - 1 !== index && (
        <div className="arrow-icons">
          <span className="material-icons arrow-up" onClick={event => moveIconUp(event, index)}>
            keyboard_arrow_up
          </span>
          <span className="material-icons arrow-down" onClick={event => moveIconDown(event, index)}>
            keyboard_arrow_down
          </span>
        </div>
      )}
      <input
        type="text"
        id={index}
        value={link}
        onChange={event => updateLinksArray(event, index)}
        placeholder={link ? link : 'Paste social media URL'}
      ></input>
      {links.length - 1 !== index && (
        <span className="material-icons trash-icon" onClick={event => deleteIcon(event, index)}>
          delete_outline
        </span>
      )}
    </div>
  );
}

LinkComponent.propTypes = {
  link: PropTypes.string,
  links: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  moveIconUp: PropTypes.func.isRequired,
  moveIconDown: PropTypes.func.isRequired,
  updateLinksArray: PropTypes.func.isRequired,
  deleteIcon: PropTypes.func.isRequired,
};

export default LinkComponent;
