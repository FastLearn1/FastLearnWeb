import { Box } from "./tochange/Box";



const Topic = () =>{
    return(
        <main className="flex-col w-screen justify-center">
          <div className="grid grid-cols-1">
            <div className="p-7 ml-32 "><h1 className="font-semibold">THOPIC EDUCATIONAL</h1></div>
            <div className="bane w-screen max-w-5xl mx-auto p-8"></div>
          </div>
        <section className="flex justify-center flex-wrap">
             <Box/>
             <Box/>
             <Box/>
        </section> 
        </main>
        
        
    )
}

export default Topic;
