import React,{useState} from 'react'
import axios from 'axios'

export const CreateEmp = () => {
    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [salary,setSalary] = useState('')
    const [contact,setContact] = useState({
        contact1: '',
        contact2: ''
    })
    const Submit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/createemp',{id,name,salary,contact})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div className='form'>
        <form onSubmit={Submit}>
            <div className='mb-2'>
                <label>Enter id: <input type='text' value={id} 
                onChange={(e)=>{setId(e.target.value)}}></input></label>
            </div>
            <div className='mb-2'>
                <label>Enter name: <input type='text' value={name}
                onChange={(e)=>{setName(e.target.value)}}></input></label>
            </div>
            <div className='mb-2'>
                <label>Enter salary: <input type='text' value={salary}
                onChange={(e)=>{setSalary(e.target.value)}}></input></label>
            </div>
            <div className='mb-2'>
                <label>Enter contact1: <input type='text' value={contact.contact1}
                onChange={(e)=>{setContact({...contact,contact1:e.target.value})}}></input></label>
            </div>
            <div className='mb-2'>
                <label>Enter contact2: <input type='text' value={contact.contact2}
                onChange={(e)=>{setContact({...contact,contact2:e.target.value})}}></input></label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
