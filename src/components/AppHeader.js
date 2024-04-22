import { Link } from "react-router-dom";

const navs = [
  { link: "/", name: "Home" },
  { link: "/tabs", name: "Tabs" },
];

function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-4">Learn React - Arpit</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" exact className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tabs" className="nav-link">
              Tabs
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppHeader;
