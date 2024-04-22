import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";

import ReactTabs from "./pages/ReactTabs";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/react-js">
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <main>
          <Routes>
            <Route path="" exact="true" element={<Home/>}></Route>
            <Route path="tabs" element={<ReactTabs/>}></Route>
          </Routes>
        </main>
        <hr/>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
