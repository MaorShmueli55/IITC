
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNum, reduce , reset } from "../store/action/CounterAction";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counter)
  return (
    <>
    <button style={{ marginRight: "10px" }} onClick={()=> dispatch(addNum())}>
        +
    </button>
    {count}
    <button style={{ marginLeft: "10px" }} onClick={()=> dispatch(reduce())}>
        -
    </button>
    <div style={{ display: "flex" , justifyContent: 'center'}}> 
        <button style={{ display: "block" , marginTop: "20px" }} onClick={()=> dispatch(reset())}>
            reset
        </button>
    </div>
    </>
  )
}

export default Counter