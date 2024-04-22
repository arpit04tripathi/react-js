import { Link } from "react-router-dom";

// const navs = [
//   { link: "/", name: "Home" },
//   { link: "/tabs", name: "Tabs" },
// ];

function Header() {
  return (
    <div className="bg-light container">
      <p>Header</p>
      <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" exact className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default Header;