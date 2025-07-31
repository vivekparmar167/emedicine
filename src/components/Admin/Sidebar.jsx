import React from "react";
import {Link} from 'react-router-dom';

function SIdebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Emedicine</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/AdminDashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/AdminOrders" >
          <i className="fas fa-fw fa-cog"></i>
          <span>orders</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/CustomerList" >
          <i className="fas fa-fw fa-wrench"></i>
          <span>customerlist</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">medicinelist</div>
      <li className="nav-item">
        <a className="nav-link" href="/charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Medicine">
          <i className="fas fa-fw fa-table"></i>
          <span>medicinelist</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SIdebar;
