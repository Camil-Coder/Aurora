import React from "react";
import { AuthProvider } from "./auth/authContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutaProtegida from "./routes/rutaProtegida.jsx";
import LoginPage from "./components/login/login.jsx"
import plantillaDavid from "./components/BannerDavid/Plantilla.jsx";


function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<RutaProtegida />}>
            <Route path="/Supervisor" element={<plantillaDavid/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App