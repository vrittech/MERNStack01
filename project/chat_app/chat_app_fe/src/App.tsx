import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
