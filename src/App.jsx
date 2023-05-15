import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Privacidad from "./pages/Privacidad";

function App() { 
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/privacidad" element={<Privacidad/>} /> 
      <Route index element={<Home/>} />      
      <Route path="*" element={<Error404/>} />
    </Routes>
   
   </BrowserRouter>
    
  )
}

export default App
