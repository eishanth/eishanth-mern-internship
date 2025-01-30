import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../App'


export const User=({theme,style})=>{
    const contextValue=useContext(themeContext)
    
  return (
    <div>
        <h1 style={contextValue.style}>User</h1>
    {/* <h1>{contextValue}</h1> */}
    </div>
  )
}