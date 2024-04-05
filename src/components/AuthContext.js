import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on component mount
    const isAuthenticated = localStorage.getItem("auth");
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  const login = () => {
    setAuthenticated(true);
    localStorage.setItem("auth", true);
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
