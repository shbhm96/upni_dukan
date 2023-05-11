import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
  <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/" element={<Homescreen/>} exact/>
          <Route path="/product/:id" element={<ProductScreen/> }/>
        </Routes>
      </Container>
    </main>
    <Footer/>
  </Router>
  
  );
}
export default App;