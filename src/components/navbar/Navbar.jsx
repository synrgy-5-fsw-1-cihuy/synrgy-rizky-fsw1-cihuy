import { Link } from "react-router-dom";

function NavbarSection() {
  const authToken = localStorage.getItem("AUTH_TOKEN");

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary pt-2 fixed-top">
      <div className="container-fluid">
        <div className="ms-xl-5">
          <Link className="navbar-brand logo fs-4" to="/">
            Binar<span>Car</span>
          </Link>
        </div>
        <input
          type="checkbox"
          className="openSidebarMenu"
          id="openSidebarMenu"
        />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <div className="sideMenu">
            <ul className="sidebarMenuInner">
              <li>
                <h1>BCR</h1>
              </li>
              <li>
                <a className="font-14" href="#our-services">
                  Our services
                </a>
              </li>
              <li>
                <a className="font-14" href="#why-us">
                  Why Us
                </a>
              </li>
              <li>
                <a className="font-14" href="#testimoni">
                  Testimonial
                </a>
              </li>
              <li>
                <a className="font-14" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                {authToken != null ? (
                  <button
                    onClick={logOut}
                    className="ms-2 bt-green px-2 py-1"
                  >
                    Logout
                  </button>
                ) : (
                  <Link className="bt-green p-btn " to="/register">
                    Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-5 mb-1 mb-lg-0 w-100 justify-content-end">
            <li className="nav-item px-3">
              <a
                className="nav-link text-body"
                aria-current="page"
                href="#our-services"
              >
                Our Service
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-body" href="#why-us">
                Why Us
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-body" href="#testimoni">
                Testimoni
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-body" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item px-3">
              {authToken != null ? (
                <button
                  onClick={logOut}
                  className="ms-2 bt-green mt-1 px-3 py-1"
                >
                  Logout
                </button>
              ) : (
                <button className="ms-2 bt-green mt-1 px-3 py-1">
                  <Link
                    className="bt-green text-body mt-1 px-3 py-1"
                    style={{textDecoration: "none"}}
                    to="/register"
                  >
                    Register
                  </Link>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSection;
