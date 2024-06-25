import { SearchIcon } from "lucide-react"
import { Vid } from "./tochange/Vid"

export const Search = () => {
    return(
           <main className="w-full">
                <div className="pt-7 pl-7 pb-2"><h2 className="font-semibold">SEARCH</h2></div>
                    <div className="flex w-full">
                            <input        
                                type="search"
                                className="relative h-12 bg-blue-gray-50 w-screen max-w-5xl mx-5 p-8 rounded-3xl"
                                placeholder="   #Pop"
                                aria-label="Search"
                                aria-describedby="button-addon2" />
                            <div className="absolute flex items-center pl-3 pointer-events-none">
                                    <SearchIcon className="h-6 w-6 m-5"/>
                            </div>
                    </div>
                    <div className="pl-7 pt-3"><h2 className="font-semibold">Results...</h2></div>
                <div className="pl-7 pt-3 pb-2">
                    <h2 className="font-semibold">Videos</h2>
                      <section className="flex gap-10 justify-start">
                           <Vid/>
                           <Vid/>
                           <Vid/>
                      </section> 

                      <div className="pt-3"><h2 className="font-semibold">Fastlearn Users</h2></div>
                </div>

           </main>
    
    )
}
