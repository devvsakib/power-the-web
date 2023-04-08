import './converter.css';

import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Footer/Footer';

const Converter = () => {
  // declaring a state variable textContent and a setTextContent function to manage the state of the text content.
  const [textContent, setTextContent] = useState('');

  const textRef = useRef(null);

  useEffect(() => {
    // focusing the input element on the initial render of the component
    textRef.current.focus();
  }, []);

  /*
   function to handle the click event on the buttons 
   that are used to convert the text content
   Depending on the value of the 'text' parameter, 
   it performs the corresponding operation to change the text content.
   */
  const handlingButtonClick = text => {
    /**
     The variable was created to store the 
     modified version of the user's input text and
      as well to separate the logic for 
     generating the modified text from the 
     logic for updating the state of the component
     */
    let changedText;
    switch (text) {
      case 'uppercasing':
        changedText = textContent.toUpperCase();
        break;
      case 'lowercasing':
        changedText = textContent.toLowerCase();
        break;
      case 'titlecasing':
        /**
         * In this code
         -- split(' ') it splits the input string into an array of words

         -- .map() it loops over each word in the array, and it applied a function
         that capitalized the first letter of the word and converted rest of the letters to lowercase

         -- .slice(1) method is used to get a substring of word starting 
         from the second character, which removes the first character of the word.
         eg: if word is 'eminem' , word.slice(1) returns 'minem

         -- .join(' ') combined the modified words back into a sing string,with each word
         separated by the space. 
         */
        changedText = textContent
          .split(' ')
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
        break;
      case 'reversing':
        changedText = textContent.split('').reverse().join('');
        break;
      case 'removewhitespace':
        changedText = textContent.split(' ').join('');
        break;
      case 'copy':
        navigator.clipboard.writeText(textContent);
        changedText = textContent;
        alert('Text Copied to clipboard');
        break;
      case 'clear':
        changedText = '';
        break;
      default:
        changedText = '';
    }
    //this updates the state of the textContent variable with the modified text
    setTextContent(changedText);
  };

  /*
This function updates the textContent
 state with the new value of the textarea.
 */
  const handlingTextChange = event => {
    setTextContent(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="heading">
        Are you tired of manually converting your text?
      </h1>
      <p className="content">
        Convert text case quickly and easily with our tool - just enter your
        text, select the desired case, and let our tool do the work for you. Try
        it now and save time retyping text.
      </p>
      <div className="textbox">
        {/* 
    checking whether the textContent is empty before counting the words. 
     If it is empty, we set the word count to 0 instead of 1. 
     This ensures that the word count is accurate even when the textContent is empty.
      */}
        {/* 
      Here's how it works:

1) {textContent.trim() ? ... : ...} is a ternary operator that checks if textContent.trim()
 returns a truthy value. 
 The trim() method removes whitespace from the beginning and end of the string, 
 so if textContent.trim() is truthy, it means that textContent contains at least 
 one non-whitespace character.

2) If textContent.trim() is truthy, the ternary operator returns the expression before the : symbol,
 which is textContent.trim().split(' ').length. 
 This expression calculates the number of words in textContent using the split() method.

3) If textContent.trim() is falsy (i.e., textContent is an empty string or contains only
 whitespace), the ternary operator returns the expression after the : symbol, which is 0. 
 This is because an empty string or a string with only whitespace characters does not 
 contain any words.
       */}
        <p className="words">
          Words: {textContent.trim() ? textContent.trim().split(' ').length : 0}
        </p>
        <p className="characters">Characters: {textContent.length}</p>
        <textarea
          value={textContent}
          onChange={handlingTextChange}
          ref={textRef}
          name="contentBox"
          id="contentBox"
          placeholder="Type or paste your text"
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="btns"
          onClick={() => handlingButtonClick('uppercasing')}
        >
          UPPERCASE
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('lowercasing')}
        >
          lowercase
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('titlecasing')}
        >
          Title Case
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('reversing')}
        >
          Reverse Text
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('removewhitespace')}
        >
          Remove WhiteSpace
        </button>
        <button className="btns" onClick={() => handlingButtonClick('copy')}>
          Copy to Clipboard
        </button>
        <button className="btns" onClick={() => handlingButtonClick('clear')}>
          Clear
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Converter;
