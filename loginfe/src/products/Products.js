import { useEffect, useRef, useState } from "react";
import axios from "../config/axios";
export default function Products() {
  const [products, setProducts] = useState([]);
  const productRef = useRef();
  const handleAddProduct = async () => {
    try {
      const {
        data: { product },
      } = await axios.post("/products", { name: productRef.current.value });
      setProducts((prev) => {
        return [...prev, product];
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
      productRef.current.value = "";
      setProducts(response.data.products);
    } catch (error) {
      console.log("error from fetch", error);
    }
  };
  return (
    <>
      <div>
        <input ref={productRef} placeholder="Insert product" />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

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
