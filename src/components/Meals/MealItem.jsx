import React, { useContext } from 'react'
// Components
import Form from '../UI/Form'
// Styles
import styles from './meals.module.css'
// Context
import CartContext from '../../store/cart-context'

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  
  const price = `${props.meal.price.toFixed(2)}`
  
  const addToCart = amount => {
    ctx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    });
  };

  return (
    <li>
      <div>
        <h3>{props.meal.name}</h3>
        <p>{props.meal.description}</p>
        <p className={styles.price}><span>$</span>{price}</p>
      </div>
      <div>
        <Form addToCart={addToCart}/>
      </div>
    </li>
  )
}

export default MealItem
