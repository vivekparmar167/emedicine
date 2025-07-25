import React from "react";

function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>

      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="#!" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
            <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="profile" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
