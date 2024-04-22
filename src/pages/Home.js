import "./Home.css";
import logo from "../logo.svg";
import { react } from '../data/react';

function Home() {
  return (
    <div className="App-header">
      <p>Home</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hi Arpit! Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <p>
        {react}
      </p>
    </div>
  );
}

export default Home;
