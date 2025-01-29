import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h1>
        This is a child Component
        </h1>
        <p>{props.msg}</p>
    </div>
  )
}
