import './index.css';
import React, { useState } from "react";
function App() {
const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [rating,setRating]=useState("");
const [shift,setShift]=useState("cdx");
const [shift1,setShift1]=useState("cdx1");
const [list,setList]=useState([])

const Hide=()=>{
  if(shift1==="cdx1"){
    setShift1("cdx")
  }
  else if(shift1==="cdx"){
    setShift1("cdx1")
  }
  if(shift==="cdx"){
    setShift("cdx1")

  }
  else if(shift==="cdx1"){
    setShift("cdx")
  }
}
const onSubmits=(event)=>{
  event.preventDefault();
const data={name,department,rating,}
setList((ls)=>[...ls,data])
};
  const inputEvent=(event)=>{
    setName(event.target.value)
  }
  const inputEventTwo=(event)=>{
    setDepartment(event.target.value)
  }
  const inputEventThree=(event)=>{
    setRating(event.target.value)
  }
  return (
   <div className='main'>
    <div className='center'>
      <div className={shift1}>
      <div className='container'>
      <h2>EMPLOYEE FEEDBACK FORM</h2>
      <form onSubmit={onSubmits}>
       <label> Name</label>: <input type="text" placeholder='Enter your Name' onChange={inputEvent} value={name}/><br/><br/>
       <label>Department</label>: <input type="text" placeholder='Enter your Department' onChange={inputEventTwo} value={department}/><br/><br/>
       <label>Rating</label>: <input type="number" placeholder='Rating'  onChange={inputEventThree} value={rating}/><br/><br/><br/>
       <button onClick={Hide}>click me</button>
       
      </form>
    </div><br/><br/><hr/>
    </div>
    <div className={shift}>
    
 { 
 
    list.map((a)=><div className='display'>
      
    <span>name: {a.name} </span>|
    <span>department: {a.department}</span> |
   <span> rating: {a.rating}</span>
    </div>
    )}<br/><br/>
     <button className='btn' onClick={Hide}>Go back</button>
   </div>
   </div>
   </div>
  );
}
export default App;