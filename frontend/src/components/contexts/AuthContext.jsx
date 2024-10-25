import React, { createContext, useState, useContext } from 'react';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [fullName, setFullName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading,setIsLoading]=useState(false)

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const {data} = await response.json();
      console.log(data)
      if (response.ok) {
        setAuth(data.jwttoken); // Save the token in state
        setFullName(data.user.fullName); // Save the username
        setIsLoggedIn(true)
        localStorage.setItem('authToken', data.jwttoken);
        localStorage.setItem('userName', data.user.fullName);
        return true;
      } else {
        setIsLoggedIn(false)
        console.error('Login failed:', data.message);
        return false;
      }
    } catch (error) {
      setIsLoggedIn(false)
      console.error('An error occurred:', error);
      return false;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("userName");
    if (token && user) {
      setAuth(token); // Save the token in state
      setFullName(user); // Save the username
      setIsLoggedIn(true)
    }
    setIsLoading(false);
  }, []);

  const logout = () => {
    setAuth(null);
    setUsername('');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, fullName,isLoggedIn }}>
     {isLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
