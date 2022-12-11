import Header from "./components/header/Header";
import Container from "react-bootstrap/Container";
import './App.css'
function App() {
  return (
    <>
      <Container>
        <div className="app">
          <Header />
        </div>
      </Container>
    </>
  );
}

export default App;
