import React, { useContext, useState } from 'react'
// Styles
import styles from './cart.module.css'
// Components
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Form from './Form';
// Context
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const [ orderBtn, setOrderBtn ] = useState(false)
  const ctx = useContext(CartContext);
  const totalAmount = `${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const removeItem = id => {
    ctx.removeItem(id);
  };

  const addItem = item => {
    ctx.addItem({...item, amount: 1})
  };

  const orderHandler = () => {
    setOrderBtn(true)
  }

  const submitOrder = userData => {
    console.log('order')
    console.log(userData)
    fetch('https://react-http-efaae-default-rtdb.firebaseio.com/orders.js', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        order: ctx.items
      })
    })
  }

  return (
    <Modal>
      <ul>
        {ctx.items.map((item) => (<CartItem key={item.id} item={item} onRemove={removeItem.bind(null, item.id)} onAdd={addItem.bind(null, item)}/>))}
      </ul>
      <div className={styles.total_container}>
        <p>Total Amount</p>
        <span>${totalAmount}</span>
      </div>
      {!orderBtn && <div className={styles.btn_container}>
        <button className={styles.close_btn} onClick={props.onClose}>Close</button>
        {hasItems && <button className={styles.order_btn} onClick={orderHandler}>Order</button>}
      </div>}
      {orderBtn && <Form onOrder={submitOrder} onCancel={props.onClose}/>}
    </Modal>
  )
}

export default Cart
