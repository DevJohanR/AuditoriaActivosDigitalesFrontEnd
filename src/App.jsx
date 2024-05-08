// Importa los estilos y los componentes necesarios

import { Routes, Route } from 'react-router-dom';

import PanelPages from "./Pages/PanelPages";

import Navbar from "./components/Navbar/Navbar"


const App = () => (


<div>
<Navbar />
    <Routes>
      {/* Ruta principal que muestra la página de inicio con todos los componentes */}
      <Route path="/" element={<PanelPages />} />
      
    
    </Routes></div>
 
);

export default App;
