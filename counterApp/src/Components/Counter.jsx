import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementCounter, decrementCounter, resetCounter} from '../Services/Actions/counterAction'

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement =()=>{
    dispatch(decrementCounter());
  };

  const handleReset =()=>{
    dispatch(resetCounter())
  }

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;

