import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate();
  return (
    // <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
    //       <img src="/assets/logo.png" width="80" height="40" alt="Logo icon" />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
    //         <li className="nav-item">
    //           <a
    //             className="nav-link active"
    //             aria-current="page"
    //             onClick={() => navigate("/")}
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             About Us
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Contact Us
    //           </a>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
    //         <a href="#">
    //           <i className="fab fa-facebook-square"></i>
    //         </a>
    //         <a href="#">
    //           <i className="fab fa-twitter-square"></i>
    //         </a>
    //         <a href="#">
    //           <i className="fab fa-instagram-square"></i>
    //         </a>
    //       </form>
    //       <select className="selectpicker" data-width="fit">
    //         <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
    //           English
    //         </option>
    //         <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
    //           Español
    //         </option>
    //       </select>
    //     </div>
    //   </div>
    // </nav>
    <>
    <header className="header-one">
  <div id="header-main-menu" className="header-main-menu header-sticky">
    <div className="container">                    
      <div className="row">
        <div className="col-lg-8 col-md-3 col-sm-4 col-4 possition-static">
          <div className="site-logo-mobile">
            <a href="index.html" className="sticky-logo-light"><img src="img/logo-light.png" alt="Site Logo" /></a>
            <a href="index.html" className="sticky-logo-dark"><img src="img/logo-dark.png" alt="Site Logo" /></a>
          </div>
          <nav className="site-nav">
            <ul id="site-menu" className="site-menu">
              <li><a href="#">Home</a>
              </li>
              <li>
                <a href="category.html">Category</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="header-bottom d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 d-none d-lg-block">
          <div className="nav-action-elements-layout2">
            <ul className="nav-social">
              <li><a href="#" title="facebook"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" title="twitter"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" title="twitter"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div className="site-logo-desktop">
            <a href="index.html" className="main-logo"><img src="/assets/logo.jpg" height="50" alt="Logo icon" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  );
}

export default Header;
