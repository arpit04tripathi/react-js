import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ComponentsWithPropsAndComposition from "./pages/basics/ComponentsWithPropsAndComposition";
import ComponentsWithStateAndHooks from "./pages/basics/ComponentsWithStateAndHooks";
import ApiBasics from "./pages/apis/ApiBasics";
import FormValidation from "./pages/forms/FormValidation";
import Countries from "./pages/forms/Countries";
import PATHS from "./data/paths";
import FormsBasics from "./pages/forms/FormsBasics";
import RoutesBasics from "./pages/routes/RoutesBasics";
import EnvBasics from "./pages/env/EnvBasics";

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
                {/* Pages - Home */}
                <Route path="" exact="true" element={<Home />}></Route>
                {/* Pages - Basics */}
                <Route
                  path={PATHS.BASICS_COMPONENTS}
                  element={<ComponentsWithPropsAndComposition />}
                ></Route>
                <Route
                  path={PATHS.BASICS_STATE}
                  element={<ComponentsWithStateAndHooks />}
                ></Route>
                {/* Pages - Forms */}
                <Route
                  path={PATHS.FORMS_BASICS}
                  element={<FormsBasics />}
                ></Route>
                <Route
                  path="form-validation"
                  element={<FormValidation />}
                ></Route>

                <Route path="countiries" element={<Countries />}></Route>
                {/* Pages - Routes */}
                <Route
                  path={PATHS.ROUTES_BASICS}
                  element={<RoutesBasics />}
                ></Route>
                {/* Pages - API */}
                <Route path="api/basics" element={<ApiBasics />}></Route>
                {/* Pages - Environment */}
                <Route path={PATHS.ENV_BASICS} element={<EnvBasics />}></Route>
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
