import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand border-success" href="./">
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  React Components
                </a>
                <ul className="dropdown-menu">
                  <NavItem label="Props" link="/react-components" />
                  <NavItem label="Another action" link="/" />
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <NavItem label="Something else here" link="/" />
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

export default Navbar;
