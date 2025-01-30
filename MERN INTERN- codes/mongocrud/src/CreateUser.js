import React,{useState} from 'react'
import axios from 'axios';

export const CreateUser = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');

    const Submit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/createuser',{name,email,age})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1>Create User</h1>
        <form onSubmit={Submit}>
        <div className='mb-2'>
            <label>Enter name: <input type='text' className='form-control' value={name}
            onChange={(e)=>{setName(e.target.value)}}></input></label>
        </div>
        <div className='mb-2'>
            <label>Enter email: <input type='text' className='form-control' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}></input></label>
        </div>
        <div className='mb-2'>
            <label>Enter age: <input type='number' className='form-control' value={age}
            onChange={(e)=>{setAge(e.target.value)}}></input></label>
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
        </form>

        <p>Name is: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
    </div>
  )
}
