import { Box } from "./tochange/Box";


const Topic = () =>{
    return(
        <main className="justify-center w-screen">
          <div className="grid grid-cols-1">
            <div className="p-7"><h1 className="font-semibold">Dashboard UserTeach26</h1></div>
            <div className="bane w-screen max-w-5xl mx-auto p-8"></div>
          </div>
        <section className="flex gap-10 justify-center">
             <Box/>
             <Box/>
             <Box/>
        </section> 
        </main>
        
        
    )
}

export default Topic;
