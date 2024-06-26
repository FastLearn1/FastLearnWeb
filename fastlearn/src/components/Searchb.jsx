import { SearchIcon } from "lucide-react";
import { Vid } from "./tochange/Vid";

export const Search = () => {
    return (
        <main className="w-full ml-28">
            <div className="pt-7 pl-7 pb-2"><h2 className="font-semibold">SEARCH</h2></div>
            <div className="flex w-full items-center"> {/* Flex container */}
                <div className="flex items-center w-full max-w-5xl mx-5 bg-blue-gray-50 rounded-3xl">
                    <SearchIcon className="h-6 w-6  m-3" /> {/* Icono dentro del contenedor flex */}
                    <input
                        type="search"
                        className="h-12 bg-transparent w-full p-2 rounded-3xl"
                        placeholder="#Pop"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                    />
                </div>
            </div>
            <div className="pl-7 pt-3"><h2 className="font-semibold">Results...</h2></div>
            <div className="pl-7 pt-3 pb-2">
                <h2 className="font-semibold">Videos</h2>
                <section className="flex gap-10 justify-start">
                <Vid imageSrc="./img/mjbg.png" />
                    <Vid imageSrc="./img/cursobg.png" />
                    <Vid imageSrc="./img/basquetbg.png" />
                </section>

                <div className="pt-3"><h2 className="font-semibold">Fastlearn Users</h2></div>
            </div>
        </main>
    );
};
