import { 
    NavBar
} from "../index";

import { Outlet} from "react-router";

function DashboardPattern({
  SideBarComponent
}){
  return (
    <div>
      <NavBar/>
      <div className="w-full h-screen flex flex-row">
        <div className="w-[30%] border">
          <SideBarComponent/>
        </div>
        <div className="w-[70%] border">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPattern;
