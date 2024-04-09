import Course from "../../components/Course/Course";
import SidebarCourse from "../../components/SidebarCourse/SidebarCourse";

export default function DashboardCourse() {
    return (
        <>
            <div className="flex border-t-2 h-full">
                <SidebarCourse />
                <Course />
            </div>
        </>
    )
}