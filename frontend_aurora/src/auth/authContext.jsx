import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(() => {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth === 'true';
  });

  const login = (cargoUser,nombreUser,apellidoUser) => {
    localStorage.setItem('cargo', cargoUser);
    localStorage.setItem('nombre', nombreUser);
    localStorage.setItem('apellido', apellidoUser);
    localStorage.setItem('isAuth', 'true');
    setAutenticado(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('cargo');
    localStorage.removeItem('nombre');
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
