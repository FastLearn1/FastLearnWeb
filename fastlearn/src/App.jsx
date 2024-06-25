

import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/inicio";
import Buscar from "./pages/search";
import { Perfil } from "./pages/perfil";
import Dashboard2 from "./pages/inicioPro";
import Actividades from "./pages/ActP";
import { PerfilP } from "./pages/perfilPro";


const App = () =>{
    return(
        <main>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/search" element={<Buscar></Buscar>}></Route>
                    <Route path="/perfil" element={<Perfil></Perfil>}></Route>
                    <Route path="/inicioPro" element={<Dashboard2></Dashboard2>}></Route>
                    <Route path="/Act1" element={<Actividades></Actividades>}></Route>
                    <Route path="/PerfilP" element={<PerfilP></PerfilP>}></Route>
                </Routes>
            
        </main>
    )
}

export default App;