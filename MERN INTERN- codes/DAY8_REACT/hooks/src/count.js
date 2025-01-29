import React,{useState,useEffect} from 'react'

export const Count = () => {
    const [start,setStart] = useState(0);

    useEffect(()=>{
        // console.log(`the value of start has changed: ${start}`);
        document.title=`value ${start}`
        
    },[start])
  return (
    <div>
        <h1>Count: {start}</h1>
        
        <button onClick={()=>{setStart(start+1)}}>Increment</button>
        <button onClick={()=>{setStart(start-1)}}>Decrement</button>
    </div>
  )
}
