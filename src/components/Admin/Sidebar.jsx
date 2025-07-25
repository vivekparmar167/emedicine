import React from "react";

function SIdebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Addons</div>
      <li className="nav-item">
        <a className="nav-link" href="/charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SIdebar;
