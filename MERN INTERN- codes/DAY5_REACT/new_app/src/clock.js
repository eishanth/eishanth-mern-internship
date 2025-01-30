import React,{useState} from 'react'

export const Clock = () => {
    const [count,setCount]=useState(0);
    const func =(symbol)=>{
        if(symbol==='add'){
            setCount(count+1);
        }
        else{
            setCount(count-1);
        }
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>func('add')}>+</button>
        <button onClick={()=>func('subb')}>-</button>
    </div>
  )
}
