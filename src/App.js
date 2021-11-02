import React, { useState } from 'react';
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

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generatorHead">Random Password Generator</h2>
          <div className="generatorPass">
            <h3>{password}</h3>
            <button className="copyBtn">
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
              checked={includeNumbers}
              // This will update the variable to symbols everytime its checked
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            />
          </div>
          <button className="generatorBtn">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
