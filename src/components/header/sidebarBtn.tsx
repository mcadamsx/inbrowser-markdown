import React, { ReactElement, useState } from "react";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close.svg";
import Sidebar from "components/sidebar/Sidebar";

export default function SidebarBtn(): JSX.Element {  
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      <div className="navbar">
        <div className={`menu-icon ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="navbar-brand">Logo</div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
