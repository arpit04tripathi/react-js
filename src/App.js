import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Hi Arpit! </strong> This is bootstrap 5 alert-dismissible.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Arpit! Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
