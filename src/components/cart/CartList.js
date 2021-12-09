import CartItem from "./CartItem";
import classes from './CartList.module.css';

function CartList(props) {
  return (
    <ul className={classes.list}>
      {props.meals.map((meal) => (
        <CartItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          price={meal.price}
        />
      ))}
    </ul>
  );
}

export default CartList;
