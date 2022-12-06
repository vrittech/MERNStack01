import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/login/Login";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./config/axios";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
       
      setProducts(response.data.products);
    } catch (error) {
      console.log("error from fetch", error);
    }
  };
  return (
    <>
      {products.map((product) => {
        return (
          <div className="products" key={product._id}>
            <div className="products-name">
              <h2>{product.name}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
