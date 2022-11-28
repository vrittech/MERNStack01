import { createContext, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const DEFAULTUSERNAME = "admin";
const DEFAULTPASSWORD = "admin";

const AuthContextProvider = ( ) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  const attemptLogin = (username, password) => {
    if (username === DEFAULTUSERNAME && password === DEFAULTPASSWORD) {
      setIsLoggedIn(true);
      setError(false);
     
      navigate(
      "/",
      {
        replace: true
      }
       );
      
      return;
    }
    setError(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, error, attemptLogin }}>
        <Outlet />
       
      
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
