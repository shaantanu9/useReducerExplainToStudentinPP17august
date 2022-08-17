import { useReducer } from "react";
import reducer from "./main";

const intialState = {
  count: 1000,
  count1: 10
};

const Counter1 = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1000 })}>
        IncreseBy1000
      </button>
    </>
  );
};

export default Counter1;
