import React from 'react'
// Styles
import styles from './ui.module.css'

const Input = React.forwardRef((props, ref) => {
  
  return (
    <div className={styles.input_container}>
      <input placeholder={props.label} {...props.input} ref={ref}/>
    </div>
  )
});

export default Input
