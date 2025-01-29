import React, {useState, useEffect} from "react";

function Counter(){
    const [message, setMessage] = useState("Hello, World!");
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
    }, [message]
    );
    
    return(
        <div>
        <h1>{message}</h1>
            <button onClick={()=>{setMessage('About Section')}}>About</button>
            <button onClick={()=>{setMessage('Contact Details')}}>Contact</button>
        </div>
    )

}

export default Counter;