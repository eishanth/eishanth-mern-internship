import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>{setCount((count)=>count+1)}}>+</button>
        <button onClick={()=>{setCount((count)=>count-1)}}>-</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}
