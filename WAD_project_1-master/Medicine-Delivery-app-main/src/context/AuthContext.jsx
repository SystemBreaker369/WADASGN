import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for saved user in localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('medDeliveryUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Login functionality
  const login = (email, password) => {
    // This is a simplified mock authentication
    // In a real app, you would verify credentials with a backend

    // For demo purposes, accept any email/password combo
    // that meets basic validation
    if (email && password && password.length >= 6) {
      const user = {
        email,
        name: email.split('@')[0],
        isAuthenticated: true,
      };

      // Save user to localStorage
      localStorage.setItem('medDeliveryUser', JSON.stringify(user));
      setCurrentUser(user);
      return Promise.resolve(user);
    }

    return Promise.reject(new Error('Invalid email or password'));
  };

  // Register functionality
  const register = (name, email, password) => {
    // This is a simplified mock registration
    // In a real app, you would create a user in your backend

    if (name && email && password && password.length >= 6) {
      const user = {
        name,
        email,
        isAuthenticated: true,
      };

      // Save user to localStorage
      localStorage.setItem('medDeliveryUser', JSON.stringify(user));
      setCurrentUser(user);
      return Promise.resolve(user);
    }

    return Promise.reject(new Error('Please fill all fields correctly'));
  };

  // Logout functionality
  const logout = () => {
    localStorage.removeItem('medDeliveryUser');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
