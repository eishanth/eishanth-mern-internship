import React,{useReducer} from 'react'

function reducerfunction(state,action){
    switch(action.type){
        case 'red':
            return {color:state.color='RED'}
        case 'green':
            return {color:state.color='GREEN'}
        case 'blue':
            return {color:state.color='BLUE'}
        case 'yellow':
            return {color:state.color='YELLOW'}
        case 'white':
            return {color:state.color='WHITE'}
        default:
            return {color:state.color='NO SUCH COLOR'};
    }
}
export const Rainbow = () => {
    // const input = prompt("Enter the colour");
    const [state,dispatch] = useReducer(reducerfunction,{color:'WHITE'})
    
  return (
    
    <div>
        <form>
            <label>Enter the colour : <input id='clr' type='text' placeholder='enter colour'></input></label>
        </form>
        <h1>Rainbow Colours:{state.color}</h1>
        <button onClick={()=>{
            dispatch({type:document.getElementById('clr').value})
        }}>Submit</button>
    </div>


  )
}
