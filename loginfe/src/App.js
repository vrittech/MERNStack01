import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/login/Login";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Products from "./products/Products";
import Message from "./message/Message";
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/message",
    element: <Message />,
  },
]);

export const WsContext = createContext();

function App() {
 

  return (
   <>
   <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>

    <div className="App">
        <RouterProvider router={router} />
    </div>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;
