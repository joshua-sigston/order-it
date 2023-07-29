const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  
  return (
    <li>
      <div>
        <h2>{props.item.name}adasdfas</h2>
        <div>
          <span>{price}</span>
          <span>x {props.item.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;