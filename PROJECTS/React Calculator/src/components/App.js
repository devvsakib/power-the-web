import React, { useState } from 'react';
import './styles/App.css';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import Footer from './Footer';

const App = ()=> {
  const [screenText, setScreenText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleClickOperation = (buttonValue) => {
    let result = '';
    if (buttonValue === '=') {     // evaluate the expression and set the new state
      return;
    } else if (buttonValue === 'C') {
      result=''
    } else if (buttonValue === '<=' && screenText !== '') {
      let val = screenText;
      result = val.substring(0, val.length - 1);
    } else if (buttonValue !== '=' && buttonValue !== '<=') {
      result = screenText+buttonValue;
    }
    setScreenText(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let result = '';
    try {
      // eslint-disable-next-line no-eval
      result = eval(screenText);
    } catch (e) {}
    result = result.toString();
    setScreenText(result);
  }

  return (
    <div className={darkMode ? "darkApp app" : "lightApp app"}>
      <div className={darkMode ? "darkCalculator calculator" : "lightCalculator calculator"}>
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <ButtonGroup 
          darkMode={darkMode}
          screenText={screenText}
          setScreenText={setScreenText}
          handleClickOperation={handleClickOperation}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
