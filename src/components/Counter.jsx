import { useReducer } from "react";
import reducer from "./main";

const intialState = {
  count: 1,
  count1: 10
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        IncreseBy10
      </button>
    </>
  );
};

export default Counter;
