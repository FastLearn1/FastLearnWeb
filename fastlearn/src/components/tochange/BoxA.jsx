import { ButtonD } from "../buttons/DeleteB"
import { Box } from "./Box"
import { ButtonE } from "../buttons/Editbtn"
import { ButtonA } from "../buttons/AsignB"

export const BoxA = () => {
    return(
           <main>
                <section className="flex gap-10 justify-start ml-10 mt-12">
                    <Box></Box>
                </section>
               <section className="flex px-14 pt-5 gap-5">
                    <ButtonA></ButtonA>
                    <ButtonE></ButtonE>
                    <ButtonD></ButtonD>
               </section>
           </main>
    
    )
}