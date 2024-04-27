function Footer() {

  const HOME = '/react-js';

  return (
    <footer className="bg-dark text-white py-5 my-4">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href={HOME} className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href={HOME} className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href={HOME} className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href={HOME} className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href={HOME} className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-white">© 2022 Company, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;
