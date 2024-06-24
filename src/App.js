import "./Style/main.css"
import { BrowserRouter, Routes,Redirect, Route } from "react-router-dom";

import Dashboard from "./Page/Dashboard.jsx" 

function App() {
  
  return (
    <BrowserRouter >

    <Routes path="/user/18">
      <Route path="/user/:userId" element={<Dashboard />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
