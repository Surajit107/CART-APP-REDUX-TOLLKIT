import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
