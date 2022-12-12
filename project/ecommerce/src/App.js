import Header from "./components/header/Header";
import Container from "react-bootstrap/Container";
import './App.css'
import CategoryProvider from "./context/CategoryContext";
function App() {
  return (
    <>
      <Container>
        <div className="app">
          <CategoryProvider>
          <Header />
          </CategoryProvider>
        </div>
      </Container>
    </>
  );
}

export default App;
