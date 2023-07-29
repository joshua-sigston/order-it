import React, { useRef, useState } from 'react'
// Styles
import styles from './ui.module.css'
// Components
import Input from './Input'

const Form = (props) => {
  const [ validAmount, setValidAmount ] = useState(true);
  const amount = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    
    const enteredAmount = amount.current.value;
    const enteredNum = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredNum < 1 || enteredNum > 5) {
      setValidAmount(false);
      return
    }

    props.addToCart(enteredNum);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input ref={amount} input={{ id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1'}}/>
      <button className={styles.add_btn}><span>+</span>Add</button>
      {!validAmount && <p>Please enter a valid amount!</p>}
    </form>
  )
}

export default Form
