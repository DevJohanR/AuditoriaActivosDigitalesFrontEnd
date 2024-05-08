import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  
  // Verificar si el usuario está autenticado leyendo del localStorage
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  if (!isAuthenticated) {
    // Redirigir al usuario a la página de inicio de sesión
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // El usuario está autenticado, renderizar los componentes hijos
};

export default RequireAuth;