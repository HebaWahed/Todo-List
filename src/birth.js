import React, { useState } from 'react'

export default function birth() {
  const[D1,setD1]=useState(1990)
  const addyear=()=>{
    setD1(D1+1)
  }
  const deleteyear=()=>{
    setD1(D1-1)
  }
  return (
    <div>
      <h2>1990</h2>
        <button onClick={addyear}>add year</button>
        <button onClick={deleteyear}>delete year</button>
    </div>
  )
}



