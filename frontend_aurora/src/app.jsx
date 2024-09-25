import React from "react";
import { AuthProvider } from "./auth/authContext.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RutaProtegida from "./Routes/rutaProtegida.jsx";
import LoginPage from "./components/login/login.jsx";
import PlantillaDavid from "./components/bannerDavid/plantilla.jsx";
import { useAuth } from "./auth/authContext.jsx";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dev"
            element={<RutaProtegidaWrapper />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Un nuevo componente para manejar la lógica de redirección
const RutaProtegidaWrapper = () => {
  const { autenticado } = useAuth();

  // Si no está autenticado, redirigir a '/'
  if (!autenticado) {
    return <Navigate to="/" />;
  }

  return <PlantillaDavid />;
};

export default App;
