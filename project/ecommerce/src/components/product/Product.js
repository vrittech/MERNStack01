import { useContext, useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ProductSearchContext } from "../../context/ProductSearchContext";

function ProductCard({product}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {product.image && <Card.Img variant="top" src={`http://localhost:8000/uploads/${product.image}`} />}

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary">{product.category.name}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default function Product() {
  const [products, setProducts] = useState([]);

  const {searchedString} = useContext(ProductSearchContext)
  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if(searchedString && searchedString !== ''){
        fetchAllProducts(searchedString)
    }
  }, [searchedString])

  async function fetchAllProducts(searchString = null) {
    const filters = searchString ? searchString : ''
    const response = await fetch(`http://localhost:8000/api/v1/products?filters=${filters}`);
    const { data } = await response.json();
    setProducts(data);
  }

  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={4} md={4} style={{marginBottom:'10px'}}>
              <ProductCard product={product}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
