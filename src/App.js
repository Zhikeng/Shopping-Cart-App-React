import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Itemdetail from './Components/Itemdetail';
import Itemlist from './Components/Itemlist';
import Home from './Components/Home';
import { CartContext } from './CartContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <div className='App'>

      <BrowserRouter>
        <CartContext.Provider value={{cartItems,setCartItems}}>
         <nav>
          <Link to="/">Home<br /></Link>
          <Link to="/checkout">Shopping Cart<br /></Link>
          <Link to="/item">Product</Link>
         </nav>

          <Routes>
            <Route path="/" element={<Itemlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/item" element={<Itemdetail />}>
              <Route path=":id" element={<Itemdetail />} />
            </Route>

            <Route path="*" element={<p>No Found 404</p>} />
          </Routes>
        </CartContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
