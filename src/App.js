import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
function App() {
  const[result,setresult]=useState([])
  const[pincode,setpincode]=useState("")
 useEffect(()=>{async function foo() {
  var url = `https://api.postalpincode.in/pincode/603103`;
  let result = await fetch(url);
  let result1 = await result.json();
  // console.log(result1);
  setresult(result1[0].PostOffice)
}
foo()

},[])


const handelClick=()=>{
setpincode(pincode)
}
  return (
    
    <>
  <div style={{paddingLeft:"20px",paddingRight:"800px"}}>
    <h1>POST OFFICE TASK</h1>
    <label> ENTER THE PINCODE</label><br/>

 <input type="text" onChange={(e)=>setpincode(e.target.value)} name="pincode" placeholder="pincode"></input>
 <br/>
    <div className="App">
    {result.filter((data)=>{
  
 if(pincode==""){
  return data
 }else if(pincode==data.Pincode){
  return data
 }
    

})
 .map((data,i)=>{
  return(
  <div class="card">
    
      <br/>
      <span><strong>Post office name=</strong>{data.Name}</span><br/>
      <span><strong>Post office block=</strong>{data.Block}</span><br/>
      <span><strong>Post office country=</strong>{data.Country}</span><br/>
      <span><strong>Post office country=</strong>{data.Region}</span>
      <span><strong>Post office pincode=</strong>{data.Pincode}</span>
   
  </div>)
 })}



    </div>
    </div></>
  )
}

export default App;
