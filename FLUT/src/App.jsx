import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Newslatter from './component/Newslatter';
import Footer from './component/Footer';
import { CartProvider } from './context/CartContext';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductCheckout from './Pages/Checkout';
import ShopCategory from './Pages/ShopCategory';
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
 </Routes>

 <Newslatter/>
<Footer/>
  </Router>
   </CartProvider>
  </>
}
export default App;
