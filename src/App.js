import React, {useState} from 'react';
import './App.css';
// Components
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
// Context
import CartProvider from './store/CartProvider';

function App() {
  const  [cart, setCart] = useState(false);

  const cartHandler = () => {
    setCart(!cart)
  }

  return (
    <CartProvider>
      <div className='app_container'>
        {cart && <Cart onClose={cartHandler}/>}
        <Header onCart={cartHandler}/>
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
