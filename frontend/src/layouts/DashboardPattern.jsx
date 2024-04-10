import { 
    NavBar
} from "../index";

import { Outlet} from "react-router";

function DashboardPattern({
  SideBarComponent
}){
  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar/>
      <div className="w-full h-screen flex flex-row overflow-auto">
        <div className="w-[30%] border overflow-y-scroll">
          <SideBarComponent/>
        </div>
        <div className="w-[70%] border px-10 py-2 overflow-y-scroll">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPattern;
