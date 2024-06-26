import "./Style/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Page/Dashboard.jsx" 
import Error from "./Page/Error.jsx"

function App() {
  
  return (
    <BrowserRouter >

    <Routes >
      <Route path="/user/:userId" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
