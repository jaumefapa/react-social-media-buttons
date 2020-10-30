import React, { useState, useEffect } from 'react';
import './SocialButtonsContainer.css';
import iconsDb from '../iconsDb';
import SocialButton from './SocialButton';

function SocialButtonsContainer({ links, buttonStyle, iconStyle, openNewTab, theme }) {
  const defaultStyleContainer = {
    width: 'fit-content',
  };

  const buttonDefaultStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '50px',
    height: '50px',
  };

  if (openNewTab) openNewTab = '_blank';

  return (
    <div className={defaultStyleContainer}>
      {links.map(link => {
        const extractedDomain = returnDomainUrl(link);
        if (extractedDomain) {
          return (
            <SocialButton
              link={link}
              extractedDomain={extractedDomain}
              buttonStyle={buttonStyle}
              iconStyle={iconStyle}
              openNewTab={openNewTab}
            />
          );
        }
      })}
    </div>
  );
}
const domains = Object.keys(iconsDb);

function returnDomainUrl(url) {
  if (url) {
    const finalRegex = new RegExp(/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9]*)/);
    let extractedDomain = url.match(finalRegex)[1];

    return domains.includes(extractedDomain) ? extractedDomain : false;
  }
}

SocialButtonsContainer.propTypes = {
  links: PropTypes.array.isRequired,
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  openNewTab: PropTypes.bool,
};

export default SocialButtonsContainer;
