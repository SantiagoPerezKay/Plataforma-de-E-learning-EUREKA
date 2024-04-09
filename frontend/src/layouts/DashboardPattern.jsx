import { NavBar } from "../index";

import { Outlet } from "react-router";

// eslint-disable-next-line react/prop-types
function DashboardPattern({ SideBarComponent }) {
  return (
    <div>
      <NavBar />
      <div className="w-full h-screen flex flex-row">
        <div className="w-1/5 border">
          <SideBarComponent />
        </div>
        <div className="w-4/5 border">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardPattern;
