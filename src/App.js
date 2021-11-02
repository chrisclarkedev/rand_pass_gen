import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generatorHead">Random Password Generator</h2>
          <div className="generatorPass">
            <h3>Password</h3>
            <button className="copyBtn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength">Password Strength</label>
            <input
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
              type="checkbox"
              id="upercase-letters"
              name="upercase-letters"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Include Lowercase Letters</label>
            <input
              type="checkbox"
              id="lowercase letters"
              name="lowercase letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
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
