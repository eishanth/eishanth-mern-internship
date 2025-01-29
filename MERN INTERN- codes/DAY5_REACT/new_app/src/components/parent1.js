import React,{useState} from 'react'
import { Child1 } from './child1'
import { Grandparent } from './grandparent';

export const Parent1 = () => {

    const [parent_message, setParentMessage] = useState("Hello from Parent");
    const [child_message, setChildMessage] = useState('___');
    const [grandparent_message, setGrandparentMessage] = useState('___');

    const datafromchildd = (message) => {
        setChildMessage(message);
    }
    const datafromgrandparent = (message) => {
        setGrandparentMessage(message);
    }

  return (
    <div>
        <h1>Parent component</h1>
        <p>Data from Parent: {parent_message}</p>
        <p>Data from Child: {child_message}</p>
        <p>Data from Grandparent: {grandparent_message}</p>
        <Child1 msg={parent_message} datatoparent={datafromchildd} datatoparent_from_grandparent={datafromgrandparent} />
        {/* <button onClick={send_message}>Send Data to Parent</button> */}
        
        
    </div>
  )
}
