import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
// Styles
import styles from './ui.module.css'

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose}>{props.children}</div>
}

const Overlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        {props.children}
      </div>
    </div>
  )
}

const Modal = (props) => {
  console.log('modal')
  return ReactDom.createPortal(
    <Backdrop onClose={props.onClose}> 
      <Overlay className={styles.overlay}>{props.children}</Overlay>
    </Backdrop>, document.getElementById('modal'))
}

export default Modal
