function Header() {
  return (
    <header className="pb-3">
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Header - Learn React JS in <b>{process.env.NODE_ENV}</b> mode.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
                Custom button
              </button>
              <button type="button" className="btn btn-outline-light btn-lg px-4">
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
