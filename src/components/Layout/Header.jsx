import React from 'react'
// Styles
import styles from './header.module.css'
// Components
import CartButton from './CartButton'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>orderFeast</h1>
        <CartButton onClick={props.onCart}/>
      </header>
    </React.Fragment>
  )
}

export default Header
