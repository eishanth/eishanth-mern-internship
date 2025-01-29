import React, { useState, createContext } from 'react'

const CounterContext = createContext();

const CounterProvider =({children})=>{
    const [count,setCount] = useState(0);

return(
    <CounterContext.Provider value={count}>
        {children}
    </CounterContext.Provider>
)
}

export {CounterContext,CounterProvider}
 