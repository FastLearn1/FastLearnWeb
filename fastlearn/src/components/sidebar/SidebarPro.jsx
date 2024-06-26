import { useState } from "react"
import { AlignJustify, Bolt, LayoutDashboard, LogOut, NotepadText, Search} from "lucide-react"
import { NavLink } from "react-router-dom";

export const SideBar = () => {
    const [open, setOpen] = useState(false);
    return (
            
        <nav className="flex h-screen fixed">
        <div className={`bg-indigo-700 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative flex flex-col justify-between`}>
            <div>
                <AlignJustify
                    color="#ffffff"
                    size={35}
                    className="absolute right-5 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />

                <NavLink to="/InicioPro" className={`pl-3 mt-10 cursor-pointer flex ${!open ? "mt-20" : "mt-10"} duration-300 relative`}>
                    <LayoutDashboard color="#ffffff" size={25} />
                    <h3 className={`text-white mt-0.5 ml-2 text-sl ${!open && "hidden"}`}>Dashboard</h3>
                </NavLink>

                <NavLink to="/search" className="pl-3 mt-7 cursor-pointer flex">
                    <Search color="#ffffff" size={25} />
                    <h3 className={`text-white mt-0.5 ml-2 text-sl ${!open && "hidden"}`}>Search</h3>
                </NavLink>

                <NavLink to="/Act1" className="pl-3 mt-7 cursor-pointer flex">
                    <NotepadText color="#ffffff" size={25} />
                    <h3 className={`text-white mt-0.5 ml-2 text-sl ${!open && "hidden"}`}>Asign</h3>
                </NavLink>

                <NavLink to="" className="pl-3 mt-7 cursor-pointer flex">
                    <Bolt color="#ffffff" size={25} />
                    <h3 className={`text-white mt-0.5 ml-2 text-sl ${!open && "hidden"}`}>Add Activities</h3>
                </NavLink>

                <NavLink to="/PerfilP" className="pl-3 mt-7 cursor-pointer flex">
                    <Bolt color="#ffffff" size={25} />
                    <h3 className={`text-white mt-0.5 ml-2 text-sl ${!open && "hidden"}`}>Settings</h3>
                </NavLink>
            </div>

            <NavLink to="/" className="pl-3 mb-5 cursor-pointer flex">
                <LogOut color="#ffffff" size={25} />
                <h3 className={`text-white mt-0.5 ml-2 text-sl ${!open && "hidden"}`}>Log Out</h3>
            </NavLink>
        </div>
    </nav>
                

                

                       
        )
}

