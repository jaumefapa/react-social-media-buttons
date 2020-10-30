import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import './prism.css';
import './App.css';
import SocialButtonsContainer from 'react-social-media-buttons';
import DemoForm from './components/DemoForm';
import presetFormats from './presetFormats';

const defaults = {
  links: [
    'https://www.facebook.com/Codeworks/',
    'https://twitter.com/codeworks',
    'https://www.instagram.com/codeworks/',
    'https://www.linkedin.com/school/codeworks/',
    '',
  ],
  presetFormat: 'custom',
  iconsLayout: 'horizontal',
  logoSize: 50,
  buttonSize: 50,
  iconSpace: 10,
  color: '#FF7B10',
  backgroundColor: '#E6E6E6',
  borderStyle: 'none',
  borderRadius: 35,
  borderThickness: 2,
  borderColor: '#000000',
  openNewTab: true,
};

function App() {
  useEffect(() => {
    Prism.highlightAll();
  });

  const [links, setLinks] = useState(defaults.links);
  const presetFormat = useFormInput(defaults.presetFormat);
  const iconsLayout = useFormInput(defaults.iconsLayout, presetFormat.setValue);
  const logoSize = useFormInput(defaults.logoSize, presetFormat.setValue);
  const buttonSize = useFormInput(defaults.buttonSize, presetFormat.setValue);
  const iconSpace = useFormInput(defaults.iconSpace, presetFormat.setValue);
  const color = useFormInput(defaults.color, presetFormat.setValue);
  const backgroundColor = useFormInput(defaults.backgroundColor, presetFormat.setValue);
  const borderStyle = useFormInput(defaults.borderStyle, presetFormat.setValue);
  const borderRadius = useFormInput(defaults.borderRadius, presetFormat.setValue);
  const borderThickness = useFormInput(defaults.borderThickness, presetFormat.setValue);
  const borderColor = useFormInput(defaults.borderColor, presetFormat.setValue);
  const openNewTab = useFormInput(defaults.openNewTab);

  // Refactor with useFromInput. Should be feasible.
  function updateLinksArray(event, index) {
    const newArr = [...links];
    newArr[index] = event.target.value;
    if (newArr[newArr.length - 1]) {
      newArr.push('');
    }
    setLinks(newArr);
  }

  function moveIconUp(event, index) {
    if (index === 0) return;
    let newArr = [...links];
    [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]]; // SHOULD BE MERGE WITH ICON DOWN
    setLinks(newArr);
  }

  function moveIconDown(event, index) {
    if (index === links.length - 2) return;
    let newArr = [...links];
    [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]]; // SHOULD BE MERGE WITH ICON UP
    setLinks(newArr);
  }

  function deleteIcon(event, index) {
    let tempArr = [...links];
    tempArr.splice(index, 1);
    setLinks(tempArr);
  }

  function setPresetFormat(event) {
    const selectedFormat = event.target.value;

    presetFormat.setValue(selectedFormat);

    function provideSetState(string) {
      switch (string) {
        case 'color':
          return color;
        case 'backgroundColor':
          return backgroundColor;
        case 'borderRadius':
          return borderRadius;
        case 'borderStyle':
          return borderStyle;
        case 'borderThickness':
          return borderThickness;
        case 'borderColor':
          return borderColor;
        default:
          return;
      }
    }
    for (const prop in presetFormats[selectedFormat]) {
      let tempVar = provideSetState(prop);
      tempVar.setValue(presetFormats[selectedFormat][prop]);
    }
  }

  const buttonStyle = {
    width: `${buttonSize.value}px`,
    height: `${buttonSize.value}px`,
    margin: `0px ${iconSpace.value}px`,
    backgroundColor: backgroundColor.value,
    borderRadius: `${borderRadius.value}%`,
    border: `${borderThickness.value}px ${borderStyle.value} ${borderColor.value}`,
  };

  const iconStyle = { color: `${color.value}` };

  const outputCode = `<SocialButtonsContainer
  ${`links={[${links
    .filter(element => (element !== '' ? element : null))
    .map(link => `'${link}'`)}]}`}
  ${`buttonStyle={{${
    buttonSize.value === 50
      ? ''
      : `width: '${buttonSize.value}px', height: '${buttonSize.value}px', `
  }margin: '0px ${iconSpace.value}px', backgroundColor: '${backgroundColor.value}'${
    borderRadius.value > 0 ? `, borderRadius: '${borderRadius.value}%'` : ''
  }${
    borderStyle.value !== 'none'
      ? `, border: '${borderThickness.value}px ${borderStyle.value} ${borderColor.value}'`
      : ''
  }}}`}
  ${`iconStyle={{color: '${color.value}'}}`}
  ${`openNewTab={${openNewTab.value}}`}
/>`;

  return (
    <div className="App">
      <div className="header">
        <p>React Social Media Buttons</p>
      </div>
      <div className="gradient-samples-display">
        <div className="app-samples-container">
          <SocialButtonsContainer
            links={links}
            theme={presetFormat.value}
            buttonStyle={buttonStyle}
            iconStyle={iconStyle}
            openNewTab={openNewTab.value}
          />
        </div>
      </div>
      <div className="intro app-body-container">
        <h2>Introduction</h2>
        <p>
          Play around with the diferent options and get your custom code snippet at the bottom of
          the page.
        </p>
        <br></br>
        <p>
          For the technical setup you should check the{' '}
          <a href="https://www.npmjs.com/package/react-social-media-buttons">npm package</a>.
        </p>
        <br></br>
        <p>
          <strong>NOTE:</strong> customizations too big or too long will not render properly in the
          display but the output code will still be correct.
        </p>
      </div>
      <div className="app-body-container">
        <DemoForm
          // Can I pass all these functions inside a single object/array
          updateLinksArray={updateLinksArray}
          deleteIcon={deleteIcon}
          moveIconUp={moveIconUp}
          moveIconDown={moveIconDown}
          setPresetFormat={setPresetFormat}
          props={{
            links,
            iconSpace,
            buttonSize,
            color,
            backgroundColor,
            borderRadius,
            borderStyle,
            borderThickness,
            borderColor,
            presetFormat,
            openNewTab,
          }}
        />
      </div>
      {/* >>> OUTPUT CODE <<< */}
      <div className="output-code-section">
        <div className="output-code-main">
          <h1>Output code</h1>
          <div className="output-code-box">
            <pre>
              <code className="language-javascript">{outputCode}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>Made by Jaume Fàbrega</div>
        <SocialButtonsContainer
          key={'buttons-container-2'}
          links={['https://www.linkedin.com/in/jaume-fabrega/', 'https://github.com/jaumefapa']}
          buttonStyle={{
            width: '35px',
            height: '35px',
            margin: '0px 0px',
            borderRadius: '35%',
          }}
          iconStyle={{ color: '#606060' }}
          openNewTab={true}
        />
        <p className="post-scriptum">
          (In case you're wondering, YES! Above I'm using my component)
        </p>
      </div>
    </div>
  );

  function useFormInput(initialValue, presetFormatSetValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(event) {
      setValue(event.target.value);
      presetFormatSetValue && presetFormatSetValue('custom');
    }

    return {
      value,
      onChange: handleChange,
      setValue,
    };
  }
}

export default App;
