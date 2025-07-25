import React from 'react';
import SIdebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import DashboardContent from "./DashboardContent";

export default function AdminDashboard(){
    return(
         <div id="page-top">
      <div id="wrapper">
        <SIdebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <DashboardContent />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
    )

}