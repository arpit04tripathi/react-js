import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <header className="bg-warning p-3 mb-2">
        <Header />
        <Navbar />
      </header>
      <main>
        <div className="row">
          <div className="col-3 p-5 bg-secondary">
            <Sidebar/>
          </div>
          <div className="col-9">
            <Home />
            <br/>
            <About />
          </div>
        </div>
      </main>
      <footer className="bg-primary p-3 mt-3">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
