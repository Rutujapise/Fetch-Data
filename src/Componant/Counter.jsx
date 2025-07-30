import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState()

  useEffect(()=>{
    const timer=setInterval(() =>{
      console.log ('Print after every seconds')
    },1000);
    console.log ("count Updated")
    return ()=>{
      clearInterval(timer)
      console.log('********Clear*******')
    }
  },[count])
  return (
    <div>
      
      <h1>COUNT :{count}</h1>
      <button onClick={()=> setCount(count+1 )}>Increment</button>
    </div>
  )
}

export default Counter