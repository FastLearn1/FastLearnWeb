import { useState } from "react";
import { SideBar } from "../components/sidebar/SidebarPro";
import Topic from "../components/TopicPro";

const Dashboard2 = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);

    return (
        <main className="flex">
            <SideBar isOpen={sideBarOpen} />
            <Topic isOpen={sideBarOpen} />
        </main>
    );
}

export default Dashboard2;