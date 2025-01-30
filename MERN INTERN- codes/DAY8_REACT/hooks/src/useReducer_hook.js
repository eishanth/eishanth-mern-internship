import React,{useReducer} from 'react'

const Actions ={
    INC:'increment',
    DEC:'decrement',
    RES:'reset'
}
const reducerfunction =(state,action) =>{
    switch(action.type){
        case Actions.INC:
            return{start:state.start+1}
        case Actions.DEC:
            return{start:state.start-1}
        case Actions.RES:
            return{start:0}
        case 'add':
            return{start:state.start+10}
        default:
            return state
    }
}


function UseReducerHook(){
    const [state,dispatch] = useReducer(reducerfunction,{start:0})
    function inc (){
        dispatch({type:'increment'})
        }
    function dec (){
        dispatch({type:'decrement'})
    }
    function res (){
        dispatch({type:'reset'})
    }
    function add (){
        dispatch({type:'add'})
    }

    return(
        <div>
            <h1>UseReducerHook</h1>
            
            <h2>{state.start}</h2>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={res}>Reset</button>
            <button onClick={add}>Add 10</button>
        </div>
    )
}
export default UseReducerHook