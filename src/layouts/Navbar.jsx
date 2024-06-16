import * as URL from "../data/url";
import PATHS from '../data/paths';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand border-success" href={URL.HOME}>
            Learn React JS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link">
                  <Link to="/" exact="true" className="nav-link active">
                    Home
                  </Link>
                </button>
              </li>
              <li className="nav-item dropdown py-2">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Basics
                </button>
                <ul className="dropdown-menu">
                  <NavItem label="Props" link={PATHS.BASICS_COMPONENTS} />
                  <NavItem label="State" link={PATHS.BASICS_STATE + "?name=arpit"} />
                  <NavItemDivider />
                  <NavItem label="Something" link="/" />
                </ul>
              </li>
              <li className="nav-item dropdown py-2">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Forms
                </button>
                <ul className="dropdown-menu">
                  <NavItem label="Basics" link={PATHS.FORMS_BASICS} />
                  <NavItem label="Form Validation" link="/form-validation?token=my-token-from-req-param&name=arpit" />
                  <NavItemDivider />
                  <NavItem label="Countries" link="/countiries"/>
                </ul>
              </li>
              <li className="nav-item dropdown py-2">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Routes
                </button>
                <ul className="dropdown-menu">
                  <NavItem label="Basic" link={PATHS.ROUTES_BASICS + "?token=my-token-from-req-param&name=arpit"} />
                  <NavItemDivider />
                  <NavItem label="Something" link="/" />
                </ul>
              </li>

              <li className="nav-item dropdown py-2">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  API
                </button>
                <ul className="dropdown-menu">
                  <NavItem label="Basic" link="/api/basics" />
                  <NavItemDivider />
                  <NavItem label="Something" link="/" />
                </ul>
              </li>

              <li className="nav-item dropdown py-2">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Env
                </button>
                <ul className="dropdown-menu">
                  <NavItem label="Basic" link={PATHS.ENV_BASICS} />
                  <NavItemDivider />
                  <NavItem label="Something" link="/" />
                </ul>
              </li>
              <NavItem label="About" link="/about" />
              <NavItem label="Disabled" link="/" disabled />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavItem({ label, link, disabled = false }) {
  return (
    <li className="nav-item">
      <button className="nav-link">
        <Link to={link} className={disabled ? "nav-link disabled" : "nav-link active"}>
          {label}
        </Link>
      </button>
    </li>
  );
}

const NavItemDivider = () => {
  return (
    <li>
      <hr className="dropdown-divider"></hr>
    </li>
  );
};

export default Navbar;
