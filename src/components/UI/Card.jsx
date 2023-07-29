import React from 'react'
// Styles
import styles from './ui.module.css'

const Card = (props) => {
  return (
    <div className={styles.card_container}>
      {props.children}
    </div>
  )
}

export default Card
