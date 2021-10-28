import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Starter</h1>
      <div className="container">
        <div className="generator">
          <h2 className="generatorHead">Password Generator</h2>
          <div className="generatorPass">
            <h3>Password</h3>
            <button className="copyBtn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
