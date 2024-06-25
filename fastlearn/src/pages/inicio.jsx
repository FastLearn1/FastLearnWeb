import { useState } from "react";
import { SideBar } from "../components/sidebar/Sidebar";
import Topic from "../components/Topic";

const Dashboard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);

    return (
        <main className="flex">
            <SideBar isOpen={sideBarOpen} />
            <Topic isOpen={sideBarOpen} />
        </main>
    );
}

export default Dashboard;