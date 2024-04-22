import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <header className="bg-light p-3">
        <Header />
        <Navbar />
      </header>
      <main>
        <div className="row">
          <div className="col-3 p-5">
            <Sidebar />
          </div>
          <div className="col-9">
            <Home />
            <About />
          </div>
        </div>
      </main>
      <footer className="bg-light p-3">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
