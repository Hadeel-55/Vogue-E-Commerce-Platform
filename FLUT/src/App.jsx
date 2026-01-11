import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Deal from './component/Deal';
import "./App.css";

function App() {
  return <>
  <Router>
 <Navbar />
 <Hero/>
<Deal/>
 <Routes>

 </Routes>
  </Router>
 
  </>
}
export default App;
