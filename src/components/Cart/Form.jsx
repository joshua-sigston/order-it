import React, { useRef, useState } from 'react'
import styles from './cart.module.css'

const isEmpty = value => value.trim() === '';
const charValidation = value => value.trim().length === 5;

const Form = props => {
  const [ formValidity, setFormValidity ] = useState({
    nameInput: true,
    streetInput: true,
    cityInput: true,
    postalInput: true
  });

  const name = useRef();
  const street = useRef();
  const city = useRef();
  const postal = useRef();

  const confirmHandler = e => {
    e.preventDefault();

    const enteredName = name.current.value;
    const enteredStreet = street.current.value;
    const enteredCity = city.current.value;
    const enteredPostal = postal.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = charValidation(enteredPostal);

    setFormValidity({
      nameInput: nameIsValid,
      streetInput: streetIsValid,
      cityInput: cityIsValid,
      postalInput: postalIsValid
    })
    console.log('form')

    const formIsValid = nameIsValid && streetIsValid && cityIsValid && postalIsValid;
    console.log(formIsValid)
    if (!formIsValid) {
      return;
    };
    console.log('before order')
    props.onOrder({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postal: enteredPostal
    })
  };

  return (
    <form className={styles.checkout_form} onSubmit={confirmHandler}>
      <input type="text" id='name' placeholder='Name' ref={name}/>
      {!formValidity.name && <p>Please enter a valid name.</p>}
      <input type="text" id='street-address' placeholder='Street Address' ref={street}/>
      {!formValidity.street && <p>Please enter a valid street.</p>}
      <input type="text" id="city" placeholder='City' ref={city}/>
      {!formValidity.city && <p>Please enter a valid city.</p>}
      <input type="text" id='postal' placeholder='Postal Code' ref={postal}/>
      {!formValidity.postal && <p>Please enter a valid postal code.</p>}
      <div className="btn_container">
        <button type='submit'>CheckOut</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default Form
