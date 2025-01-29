import React,{useState} from 'react'
import HomeImg from '../images/homeimg.jpeg'
import { addUser } from '../slices/userslicer'
import { useDispatch } from 'react-redux'

export const Home = () => {
    const dispatch = useDispatch()
    const [formdata,setformdata]=useState({
        name:'',
        age:'',
        email:''
    })
    function handlechange(event){
        const {id,value}=event.target
        console.log(id,value)
        setformdata({...formdata,[event.target.id]:event.target.value})
    }

    const add =(e)=>{
        e.preventDefault(); //this is optional
        dispatch(addUser(formdata))
    }

  return (
    <div className='home'>
        {/* <img src={HomeImg} alt='home'></img> */}
        <h1>This is home component</h1>
        <form className='home-form'>
            <label>Name: <input id='name' type='text' value={formdata.name} onChange={handlechange}></input></label><br></br>
            <label>Age: <input id='age' type='number'  value={formdata.age} onChange={handlechange}></input></label><br></br>
            <label>Email: <input id='email' type='email'  value={formdata.email} onChange={handlechange}></input></label>
            <button onClick={add}>ADD</button>
        </form>
    {/* // new form for practise */}
    </div>
  )
}
