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
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Hi Arpit! </strong> This is bootstrap 5 alert-dismissible.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <Routes>
            <Route path="" exact="true" element={<Home />}></Route>
            <Route path="tabs" element={<ReactTabs />}></Route>
          </Routes>
        </main>
        <hr />
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
