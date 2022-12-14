import Header from "./components/header/Header";
import Container from "react-bootstrap/Container";
import "./App.css";
import CategoryProvider from "./context/CategoryContext";
import Product from "./components/product/Product";
import ProductSearchContextProvider from "./context/ProductSearchContext";
function App() {
  return (
    <>
      <ProductSearchContextProvider>
        <Container>
          <div className="app">
            <CategoryProvider>
              <Header />
              <Product />
            </CategoryProvider>
          </div>
        </Container>
      </ProductSearchContextProvider>
    </>
  );
}

export default App;
