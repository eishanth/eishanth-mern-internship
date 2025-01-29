import React, { useState } from 'react'

export const Sort = () => {
    const arr1 = [1,5,3]
    const arr2 = [2,7,3]
    const [combined, SetCombined] = useState([] )

    const combinearr = () =>{
        document.getElementById('result').innerHTML = arr1.concat(arr2).sort()
    }
  return (
    <div>
        <h1>Sort</h1>
        <p>Array 1 : {arr1.join(', ')}</p>
        <p>Array 2 : {arr2.join(', ')}</p>
        <h1 id='result'></h1>
        <button onClick={combinearr}>Click on the button</button>
    </div>
  )
}
