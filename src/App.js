import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkOut' element={<CheckOut />} />
          <Route path='/products' element={<Products />} />
          <Route path='/pdetails/:pid' element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
