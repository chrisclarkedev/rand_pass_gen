import React, { useState } from 'react';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './components/Characters';
import './App.css';

function App() {
  // Declared Variables
  // Set password and setPassword into state as an empty string
  const [password, setPassword] = useState('');

  // Set variable to store password length
  // Password lengths value is "20"
  const [passLength, setPassLength] = useState(20);

  // Set variable to keep track of uppercase, lowercase, numbers and symbols
  // Setting it to false will initialize it as unchecked
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // HandleGeneratePassword is an event arrow function
  // Variable characterlist set to empty string
  // If statement block that will  check if the user has checked any of the optional boxes
  const handleGeneratePassword = (e) => {
    let characterList = '';

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  // Take characterList as an input then add a function to it
  // Set let password as an empty string
  // Then check the length of the character list
  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;

    // Look to create an index to generate a random function
    // This will make sure i is less than the password length
    // It will round of the random number then multiply it by the characterListLength
    // Generate a random index that will inturn generate a random character list
    for (let i = 0; i < passLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  // Function that takes the password that was generated
  // Selects it copies it and removes it from the the copied area
  const copyClipboard = () => {
    const newTextArea = document.createElement('textarea');
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand('copy');
    newTextArea.remove();
  };
  // Clipboard effect function
  const handleCopyPass = (e) => {
    copyClipboard();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generatorHead">Random Password Generator</h2>
          <div className="generatorPass">
            <h3>{password}</h3>
            <button onClick={handleCopyPass} className="copyBtn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input
              // Set the default value to passLength which is "20"
              defaultValue={passLength}
              //This will update the variable password length everytime you change the values
              onChange={(e) => setPassLength(e.target.value)}
              type="number"
              id="password-strength"
              name="password-strength"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
            <input
              // Set the checked value initially to false (no check on box)
              checked={includeUppercase}
              // This will update the variable to uppercase everytime its checked
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type="checkbox"
              id="upercase-letters"
              name="upercase-letters"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Include Lowercase Letters</label>
            <input
              // Set the checked value initially to false (no check on box)
              checked={includeLowercase}
              // This will update the variable to lowercase everytime its checked
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type="checkbox"
              id="lowercase letters"
              name="lowercase letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              // Set the checked value initially to false (no check on box)
              checked={includeNumbers}
              // This will update the variable to numbers everytime its checked
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              // Set the checked value initially to false (no check on box)
              checked={includeSymbols}
              // This will update the variable to symbols everytime its checked
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            />
          </div>
          <button onClick={handleGeneratePassword} className="generatorBtn">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
