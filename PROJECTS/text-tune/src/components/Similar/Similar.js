import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './similar.css';

const Similar = () => {
  const [words, setWords] = useState('');
  const [error, setError] = useState(null);

  // this holds the type of search performed
  const [type, setType] = useState('');

  /*
Not using useEffect because fetching data
immediately when the component mounts is
not needed.
We are fetching data in response to user interaction.
*/

  // for synonym
  // using async/await to handle asynchronous operations
  const getSynonym = async () => {
    const inputWord = document.getElementById('similarity').value;
    /**
     Trim will remove any whitespaces from the beginning and end
     of the user input and then the if statement checks if the 
     trimmed input is not an empty string or contains whitespace characters
     */
    if (inputWord.trim()) {
      try {
        const res = await axios.get(
          `https://api.datamuse.com/words?rel_syn=${inputWord}`
        );
        /*
             1) using map to transform each object into a string and a dash is added before
          the word that is returned by api
            2)  using join to join all the strings into a single string
            with line breaks
            \n creates a new line for the upcoming text.
          */
        const synonymWords = res.data.map(word => `- ${word.word}`).join('\n');
        // checking if the given word is present in api or not
        if (synonymWords) {
          setWords(`Here are your synonyms:\n${synonymWords}`);
          setType('synonyms');
        } else {
          setWords(`Sorry, we couldn't find any synonyms for ${inputWord}`);
          setType('');
        }
      } catch (error) {
        setError(error);
      }
    } else {
      setWords('Please enter a word');
      setType('');
    }
  };

  // for antonym
  // using async/await to handle asynchronous operations
  const getAntonym = async () => {
    const inputWord = document.getElementById('similarity').value;
    if (inputWord.trim()) {
      try {
        const res = await axios.get(
          `https://api.datamuse.com/words?rel_ant=${inputWord}`
        );
        const antonymWords = res.data.map(word => `- ${word.word}`).join('\n');
        if (antonymWords) {
          setWords(`Here are your antonyms:\n${antonymWords}`);
          setType('antonyms');
        } else {
          setWords(`Sorry, we couldn't find any antonyms for ${inputWord}`);
          setType('');
        }
      } catch (error) {
        setError(error);
      }
    } else {
      setWords('Please enter a word');
      setType('');
    }
  };

  // Copying the synonyms or antonyms to clipboard using the navigator api provided by js
  const copyToClipboard = () => {
    const textToCopy = document.getElementById('similarbox').value;
    navigator.clipboard.writeText(textToCopy);
    alert('Copied To Clipboard');
  };

  return (
    <div className="similar-content">
      <h1 className="main-heading">Choose your words wisely.</h1>
      <p className="contents">
        Our synonym and antonym finder helps you find the perfect ones. Upgrade
        your writing today.”
      </p>
      <div className="content-box">
        <label htmlFor="similarity">Please Enter one word at a time</label>
        <input id="similarity" type="text" autoFocus></input>
        <div className="buttons">
          <button className="btns" onClick={getSynonym}>
            Synonym
          </button>
          <button className="btns" onClick={getAntonym}>
            Antonym
          </button>
          <button className="btns" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div className="textbox">
        <textarea
          name="similarbox"
          id="similarbox"
          readOnly
          value={words}
          placeholder={`Here are your ${type}`}
        ></textarea>
      </div>
      <div className="thanks">
        <p>
          The API used to find Synonyms and Antonyms is DataMuse Api.{' '}
          <a
            href="https://www.datamuse.com/api/"
            target="_blank"
            rel="noreferrer"
          >
            Link To DataMuse Api
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Similar;
