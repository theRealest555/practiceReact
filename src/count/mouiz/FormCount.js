import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
export default function CounterF() {
  const count = useSelector((state) => state.count); 
  const dipsh = useDispatch(); 

  return (
    <>
      <h1 id="count">{count}</h1>
      <div>
        <button id="btn" onClick={() => dipsh(increment())}>
          Incrementer
        </button>
        <button id="btn" onClick={() => dipsh(decrement())}>
          Decrementer
        </button>
      </div>
    </>
  );
}