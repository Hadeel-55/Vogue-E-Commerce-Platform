import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Newslatter from './component/Newslatter';
import Footer from './component/Footer';
import { CartProvider } from './context/CartContext';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductCheckout from './Pages/Checkout';
import ShopCategory from './Pages/ShopCategory';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Tracking from './Pages/Tracking';
import "./App.css";

function App() {
  return <>
  <CartProvider>


  <Router>
 <Navbar />

 <Routes>
   <Route path="/" element={<Home />} />
   <Route path='/shoppingCart' element={<ShoppingCart/>} />
   <Route path='/productCheckout' element={<ProductCheckout/>} />
   <Route path='/ShopCategory' element={<ShopCategory/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/Login' element={<Login/>} />
   <Route path='/Teacking' element={<Tracking/>} />
 </Routes>

 <Newslatter/>
<Footer/>
  </Router>
   </CartProvider>
  </>
}
export default App;
