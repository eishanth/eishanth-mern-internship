import React,{useState} from 'react'

export const Formtoredux = () => {
    const [formvalue,setformvalue]=useState({
        name:'',
        age:'',
    })
    const handlechange=(e)=>{
        const{id,value}=e.target
        setformvalue({...formvalue,[e.target.id]:e.target.value})
        // console.log(id,value);
        console.log(formvalue);
        
        
    }
  return (
    <div>
        <form>
            <label>Name: <input id='name' type='text' onChange={handlechange} value={formvalue.name}></input></label><br></br>
            <label>Age: <input id='age' type='number' onChange={handlechange} value={formvalue.age}></input></label><br></br>
        </form>

        <h1>{formvalue.name}</h1>
        <h1>{formvalue.age}</h1>
    </div>
  )
}
