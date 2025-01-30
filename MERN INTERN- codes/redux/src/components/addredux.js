import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userslicer';

export const Addredux = () => {
    const dispatch = useDispatch();
    const [num,setNum] = useState(
        {
            num1:'',
            num2:''
        });

    const handlechange =(e)=>{
        const {id,value}=e.target;
        setNum({...num,[e.target.id]:e.target.value})
    }
    const addnum = (e)=>{
        e.preventDefault()
        var sum = parseInt(num.num1) + parseInt(num.num2);
        console.log(sum);
        dispatch(addUser(sum));
    
    };
    const mulnum = (e)=>{
        e.preventDefault()
        var mul = parseInt(num.num1) * parseInt(num.num2);
        console.log(mul);
        dispatch(addUser(mul));
    };
    
  return (
    <div>
        <form>
            <h2>{num.num1}</h2>
            <h2>{num.num2}</h2>
            <label>number 1: <input id='num1' type='number' onChange={handlechange}></input></label><br></br>
            <label>number 2: <input id='num2' type='number' onChange={handlechange}></input></label><br></br>
            <button onClick={addnum}>ADD</button>
            <button onClick={mulnum}>MULTIPLY</button>
        </form>        
    </div>
  )
}
