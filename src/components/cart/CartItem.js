import classes from './CartItem.module.css';
import {useContext} from 'react';   
import { MealContext } from '../context/mealContext';

function CartItem(props) {
    const mealCtx=useContext(MealContext);

    function plusHandler() {
        
    }

    function minusHandler() {
        mealCtx.removeMeal(props.id)
    }
  return (
    <li>
      <div className={classes.odst}>
        <div>
          <h2 className={classes.name}>{props.name}</h2>
          <p>Amount</p>
          <div className={classes.price}>${props.price}</div>
        </div>
        <div>
          <button type="button" onClick={plusHandler}>+</button>
          <button type="button" onClick={minusHandler}>-</button>
        </div>
      </div>
      <div className={classes.cara}></div>
    </li>
  );
}

export default CartItem;
