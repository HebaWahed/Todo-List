import {React, useRef, useState } from 'react';
//redux

//action=الحدث اللي بيحصل object type
//disbatch=وسيلة المواصلات
//reducer=بيوصلتني ل state
//state=target بتاعي
// import React from 'react'
// import BirthCounter from './component/BirthCounter'
// import "./App.css"
// export default function App() {
//   return (
//     <div className='div1'>
//         Your Data Of Birth :
//        <BirthCounter/>
//     </div>
//   )
// }
import "./App.css"
function App(){
   const [x,setx]=useState([])
   const inputREf=useRef()
   const add=()=>{
     const value=inputREf.current.value
     const newdata={completed:false,value}
     setx([...x,newdata])
     inputREf.current.value=""
   }
   const itemDone=(index)=>{
    const newx=[...x]
    x[index].completed= !x[index].completed
    setx(newx)
   }
   const toDelete=(index)=>{
    const newx=[...x]
    newx.splice(index,1)
    setx(newx)
   }
   
  return(
    <div className='parent'>
  <div className="App">
   
     <h2>Todo list</h2>
      <ul>
        {
          x.map(({value,completed},index)=>{
            return <div className='div2'>
            <li className={completed ? "diffStyle":""}  onClick={()=>itemDone(index)}>{value}</li>
            
            </div>

          })
       }
       <input className='btn' ref={inputREf} placeholder="Enter Your Task"/>
       <div className='btns'>
       <button onClick={add}>Add Task</button>
      <button onClick={toDelete}>Delete Task</button>

       </div>
     

      </ul>
  </div>
  </div>
  )

}

export default App

