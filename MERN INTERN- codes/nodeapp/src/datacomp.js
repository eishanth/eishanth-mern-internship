import React,{useState,useEffect} from 'react'
import axios from 'axios';
const DataComponent = () => {
    const [data, setData] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:3000/api/data')
        .then((response)=>{
            setData(response.data.message);
        })
        .catch((error)=>{
            console.log("Error fetching: ",error);
        })
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/data',{message:inputMessage})
        .then((response)=>{
            setResponseMessage(response.data.message);
        })
        .catch((error)=>{
            console.log("Error sending: ",error);
        })
    }
  return (

    <div>
        <h1>Data from server</h1>
        <p>{data}</p>
        <form onSubmit={handleSubmit}>
        <label>enter a message: 
            <input type="text" value={inputMessage} onChange={(e)=>setInputMessage(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}
export default DataComponent;

         