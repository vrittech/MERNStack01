import { createBrowserRouter, Navigate } from "react-router-dom";
import LoggedInWrapper from "./components/loggedInWrapper/LoggedInWrapper";
import Contact from "./pages/contacts/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Todo from "./pages/todo/Todo";

export const router = createBrowserRouter([
    {
        path :"/login",
        element: <Login />
    },
  {
    path: "/",
    element: <LoggedInWrapper />,
    children: [
        {
            path: '/',
            element : <Navigate to='/home' replace={true}/>
        },
        {
            path: '/home',
            element: <Home />,
        },

        {
            path : '/todo',
            element: <Todo />
          },
           {
            path : '/contact',
            element: <Contact />,
            
          },
    ]
   
  },
  
  
]);