import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/react-js">
      <div>
        <Navbar />
        <Header />
        <main>
          <div className="row">
            <div className="col-3 p-5 bg-secondary">
              <Sidebar />
            </div>
            <div className="col-9">
              <Routes>
                <Route path="" exact="true" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;