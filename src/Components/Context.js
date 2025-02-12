import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);

  const login = (email, password) => {
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      setIsAuthenticated(true);
      return registeredUser.role;
    } else {
      return null;
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    setRegisteredUser(null); // Clear registered user on logout
  };

  // Function to handle user registration
  const registerUser = (email, password, role) => {
    setRegisteredUser({ email, password, role });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        registeredUser,
        login,
        logout,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => {
  const context = useContext(AuthContext);

  // Ensure that useAuth is called within AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
