import React, { useEffect, useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import Home, { IMessage } from "./pages/Home";
export const SocketContext = createContext<{message : IMessage | null}>({message : null});

function SocketProvider() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [searchParams] = useSearchParams();
  const loggedInUser = searchParams.get("loggedInUser");
  const [message, setMessage] = useState<IMessage | null>(null)
  useEffect(() => {
    connectToSocket();
  }, []);

  const connectToSocket = () => {
    const ws = new WebSocket(
      `ws://localhost:8000?loggedInUser=${loggedInUser}`
    );
    setSocket(ws);
  };

  socket?.addEventListener('open' , () => console.log("Socket connected"))

  socket?.addEventListener('message' , (event) => {
    const newMessage = JSON.parse(event.data) as unknown as IMessage
      setMessage(newMessage)
    
  })

  socket?.addEventListener('close' , () => console.log("Closed"))

  return (
    <SocketContext.Provider value={{message}} >
      <Outlet />
    </SocketContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SocketProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
