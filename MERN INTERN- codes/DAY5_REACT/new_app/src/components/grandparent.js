import React,{useState} from 'react'

export const Grandparent = (props,datatochild) => {

    const [grandparent_message_parent, setGrandparentMessage_parent] = useState("Hello from Grandparent to parent");
    const[grandparent_message_son, setGrandparentMessage_son] = useState("Hello from Grandparent to son");
    const send_message = () => {
        props.datatochild(grandparent_message_parent, grandparent_message_son);
    }

  return (
    <div>
        <h1>GrandParent Component</h1>
        <button onClick={send_message}>Send Data to Parent & Child</button>

    </div>
  )
}
