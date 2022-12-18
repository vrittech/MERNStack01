import { useContext, useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CartProvider, { CartContext } from "../../context/CartContext";
import { ProductSearchContext } from "../../context/ProductSearchContext";

function ProductCard({ product }) {
  const {
    findItemsInCart,
    handleQtyDecrement,
    handleQtyIncrement,
    addToCart

   } = useContext(CartContext)
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {product.image && (
          <Card.Img
            variant="top"
            src={`http://localhost:8000/uploads/${product.image}`}
          />
        )}

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary">{product.category.name}</Button>
          {findItemsInCart(product._id)?.product ? (
            <div style={{ display: "flex", padding: "1rem 0", gap: "1rem" }}>
              <div
                style={{
                  background: "blue",
                  padding: "6px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => handleQtyIncrement(product)}
              >
                +
              </div>
              <div>Qty : {findItemsInCart(product._id)?.qty ?? 0}</div>
              <div
                style={{
                  background: "red",
                  padding: "6px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => handleQtyDecrement(product)}
              >
                -
              </div>
            </div>
          ) : (
            <Button
              variant="secondary Variant"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default function Product() {
  const [products, setProducts] = useState([]);

  const { searchedString } = useContext(ProductSearchContext);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (searchedString && searchedString !== "") {
      fetchAllProducts(searchedString);
    }
  }, [searchedString]);

  async function fetchAllProducts(searchString = null) {
    const filters = searchString ? searchString : "";
    const response = await fetch(
      `http://localhost:8000/api/v1/products?filters=${filters}`
    );
    const { data } = await response.json();
    setProducts(data);
  }

  return (
    <CartProvider>
      <Row>
        {products.map((product) => {
          return (
            <Col
              key={product._id}
              sm={4}
              md={4}
              style={{ marginBottom: "10px" }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>

    </CartProvider>
  );
}
