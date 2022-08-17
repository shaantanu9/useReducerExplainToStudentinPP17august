import { useReducer } from "react";
import reducer from "./main";

const intialState = {
  count: 100,
  count1: 10
};

const Counter1 = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 100 })}>
        IncreseBy100
      </button>
    </>
  );
};

export default Counter1;
