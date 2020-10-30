import React, { useState, useEffect } from 'react';
import iconsDb from '../iconsDb'; // is it better that I pass it from the parent or that I require it here? Should I pass the svg path from the parent so I only do 1 query?

function SocialButton({ link, extractedDomain, buttonStyle, iconStyle, openNewTab }) {
  const buttonDefaultStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '50px',
    height: '50px',
  };

  const finalButtonStyle = Object.assign(buttonDefaultStyle, buttonStyle);
  const finalIconStyle = Object.assign({}, iconStyle);

  if (iconStyle.color === 'original') {
    Object.assign(finalIconStyle, {
      color: iconsDb[extractedDomain]['color'],
    });
  }

  if (buttonStyle.backgroundColor === 'original') {
    Object.assign(finalButtonStyle, {
      backgroundColor: iconsDb[extractedDomain]['color'],
    });
  }

  if (buttonStyle.borderColor && buttonStyle.borderColor === 'original') {
    Object.assign(finalButtonStyle, {
      borderColor: iconsDb[extractedDomain]['color'],
    });
  }

  return (
    <a href={link} target={openNewTab} style={finalButtonStyle}>
      <svg viewBox="0 0 64 64" style={iconStyle}>
        <g fill={finalIconStyle.color}>
          <path d={iconsDb[extractedDomain].icon}></path>
        </g>
      </svg>
    </a>
  );
}

SocialButton.propTypes = {
  link: PropTypes.string,
  extractedDomain: PropTypes.string,
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  openNewTab: PropTypes.bool,
  iconStylecolor: PropType.string,
};

export default SocialButton;
