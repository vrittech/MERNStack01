import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider, useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path : '/a',
    element: <div>I am at the A element</div>
  },
   {
    path : '/:id',
    element: <MyId />,
    children: [
      
        {
          path: "contacts",
          element: <div>Contact Child</div>,
        },
        {
          path: "display",
          element: <div>Display Child</div>,
        },
      
    ]
  },
  
]);

function App() {
  return (
    <div className="App">
      asdasda
      <RouterProvider router={router} />
    </div>
  );
}


function MyId(){
  const {id, name} = useParams();

  return (
    <div>
     {id}
     <Outlet />
    </div>
  )
}

export default App;
