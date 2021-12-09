import classes from "./AddForm.module.css";
import { useContext, useRef } from "react";
import { MealContext } from "./context/mealContext";

function AddForm(props) {
  const enteredAmountInput = useRef();

  const mealCtx = useContext(MealContext);

  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = enteredAmountInput.current.value;
    //  props.onAmount(enteredAmount);
    mealCtx.addMeal({
      id: props.id,
      name: props.name,
      price: props.price,
    });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        value={enteredAmountInput}
        ref={enteredAmountInput}
      />
      <div className={classes.actions}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddForm;

/*
mealCtx.addMeal({
      id: props.id,
      name: props.name,
      price: props.price,
    });
*/
