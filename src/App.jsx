// Importa los estilos y los componentes necesarios

import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth/RequireAuth';
import PanelPages from "./Pages/PanelPages";
import Login from './components/Login/Login';
import Navbar from "./components/Navbar/Navbar"



const App = () => (


<div>
<Navbar />
    <Routes>
    
    
      <Route path="/" element={<Login />} />  
      
      <Route path="/panel" element={
    <RequireAuth>
<PanelPages/>
    
    </RequireAuth>

      } />



    </Routes>
    </div>
 
);

export default App;
