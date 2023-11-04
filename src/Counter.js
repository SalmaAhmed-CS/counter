import React, { useState } from 'react'
import "./style.css"


function Counter() {
const[count,setcount] = useState(0)
const incrment = ()=> setcount(count+1)
const decrement = ()=> setcount(count-1)

  return <>
     <div className='container'>
       <h1 className='number'>{count}</h1>

     </div>
     <section className='btns-container'>
        <button onClick={incrment} className='incrment'>+</button>
        <button onClick = {decrement} className='decrement'>-</button>
     </section>
     </>

  
}

export default Counter