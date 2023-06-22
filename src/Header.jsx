import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate();
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
          <img src="../public/assets/logo.jpg" width="80" height="40" alt="Logo icon" />
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
          <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram-square"></i>
            </a>
          </form>
          <select className="selectpicker" data-width="fit">
            <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
              English
            </option>
            <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
              Español
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
