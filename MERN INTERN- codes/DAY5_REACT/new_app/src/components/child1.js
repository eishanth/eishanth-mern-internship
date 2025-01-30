import React,{useState} from 'react'
import { Grandparent } from './grandparent';

export const Child1 = (props, datatoparent, datatoparent_from_grandparent) => {

    const [child_message, setChildMessage] = useState("Hello from Child");
    const [grandparent_message, setGrandparentMessage] = useState('___');
    const send_message = () => {
        props.datatoparent(child_message);
    }
    const datafromgrandparent = (message1,message2) => {
        setGrandparentMessage(message2);
        props.datatoparent_from_grandparent(message1);
    }

  return (
    <div>
        <h1>Child component</h1>
        <p>Data from Parent: {props.msg}</p>
        <p>Data from GrandParent:{grandparent_message}</p>
        <button onClick={send_message}>Send Data to Parent</button>
        <Grandparent datatochild={datafromgrandparent} />
    </div>
  )
}
