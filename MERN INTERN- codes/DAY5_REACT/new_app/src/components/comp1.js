import React from 'react'
import { Comp2 } from './comp2';

export const Comp1 = () => {
    const name1 = "Hi from Component 1 to component 5"    
  return (
    <div>
        <h1>Component 1</h1>
        <Comp2 name={name1}/>
    </div> 
  )
}
