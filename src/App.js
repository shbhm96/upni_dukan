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
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductiListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

const App = () => {
  return (
  <Router>
    <Header/>
    <main className="py-3">
      <Container>
      <Routes>
          <Route path="/login" element={<LoginScreen/>} exact/>
          <Route path="/admin/users" element={<UserListScreen/>} exact/>
          <Route path="/admin/products" element={<ProductiListScreen/>} exact/>
          <Route path="/admin/product/:id/edit" element={<ProductiListScreen/>} exact/>
          <Route path="/admin/product/createProduct" element={<ProductEditScreen/>}exact/>
          <Route path="/order/:id" element={<OrderScreen/>} exact/>
          <Route path="/shipping" element={<ShippingScreen/>} exact/>
          <Route path="/payment" element={<PaymentScreen/>} exact/>
          <Route path="/placeorder" element={<PlaceOrderScreen/>} exact/>
          <Route path="/register" element={<RegisterScreen/>} exact/>
          <Route path="/profile" element={<ProfileScreen/>} exact/>       
          <Route path="/" element={<Homescreen/>} exact/>
          <Route path="/product/:id" element={<ProductScreen/> }/>
          <Route path="/cart/:id?" element={<CartScreen/>} exact/>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/test" element={<TestElement/>} exact/>
          <Route path="/admin/user/:id/edit" element={<UserEditScreen/>}/>

          

      </Routes>
      </Container>
    </main>
    <Footer/>
  </Router>
  
  );
}
export default App;