import { createContext } from "react";

export const valueContext = createContext({ value: 0 });

function ValueProvider(props) {

    const [value,setValue]=useState(0);
    function addAmount(mealID) {
        setValue()
    }


  return (
    <valueContext.Provider value={value}>
      {props.children}
    </valueContext.Provider>
  );
}

export default ValueProvider;
