import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import PageNotFound from "./components/PageNotFound";
import TestElement from "./components/TestElement";

const App = () => {
  return (
  <Router>
    <Header/>
    <main className="py-3">
      <Container>
      <Routes>
          <Route path="/login" element={<LoginScreen/>} exact/>
          <Route path="/" element={<Homescreen/>} exact/>
          <Route path="/product/:id" element={<ProductScreen/> }/>
          <Route path="/cart/:id?" element={<CartScreen/>} exact/>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/test" element={<TestElement/>} exact/>
          

      </Routes>
      </Container>
    </main>
    <Footer/>
  </Router>
  
  );
}
export default App;