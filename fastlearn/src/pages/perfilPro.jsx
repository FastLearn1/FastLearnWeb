import { Bell, Flag } from "lucide-react";
import { ButtonD } from "../components/buttons/Delete";
import { ButtonE } from "../components/buttons/Edit";
import { SideBar } from "../components/sidebar/SidebarPro";


export const PerfilP = () => {
  return (
    <main className="flex h-screen">
          <SideBar></SideBar>
      <div className="grid grid-rows-4">
        <div className="uno row-span-2">
          <header className="flex justify-end fixed top-0 right-0 p-4 bg-white">
            <Bell className="mt-1" />
            <div className="bg-blue-gray-100 w-36 ml-2 h-8 rounded-sm flex items-center px-2">
              <Flag className="inline justify-start mt-1 ml-1" />
              <p className="inline ml-2 mt-1">Send Report</p>
            </div>
          </header>
          <div className="flex">
            <div className="bg-blue-gray-300 size-48 rounded-full ml-10 mt-5"></div>
            <div className="flex flex-col p-10">
              <div className="font-bold mb-3">Name:</div>
              <label className="font-bold">Age:</label>
              <label className="font-bold line-clamp-1 mt-3">Email:</label>
              <label className="font-bold mt-3">
                <div>Description:</div>
                <div className="font-light w-96">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam praesentium iusto nesciunt.
                </div>
              </label>
              <label className="font-bold line-clamp-1 mt-3">Role:</label>
              <label className="font-bold line-clamp-1 mt-3">Group:</label>
            </div>
          </div>
        </div>

        <div className="dos">
          <div className="mt-8 pl-40 flex items-center">
            <ButtonE />
            <ButtonD />
          </div>
          <div className="p-7">
            <h3 className="font-semibold">My favorites</h3>
          </div>
        </div>
        <div className="tres"></div>
        <div className="cuatro">
          <div className="p-7">
            <h3 className="font-semibold">Playlist</h3>
          </div>
        </div>
      </div>
    </main>
  );
};
