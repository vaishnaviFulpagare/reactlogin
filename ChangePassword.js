import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const ChangePassword = () => {
  const [ChangeData,setChangeData]=useState({
    Email:'',
    ChangePassword:'',
    Password:''
  })
  const handlerChangeSubmit = async(e)=>{
    alert(`${ChangeData.Email}.${ChangeData.ChangePassword}.${ChangeData.Password}`)
    e.preventDefault();
    try{
      const response = await  axios.post
      ('http://localhost:3000/ChangePassword',ChangeData);
      const{success,message}=
      response.data;

      if(success){
        console.log('Password successfully')

      }
      else{
        console.log(message);
      }
    }
    catch(error){
      console.log('Password error',error)
    }
    setChangeData({
      Email:'',
      ChangePassword:'',
      Password:''
    })
  }

  const handlerPasswordchange=(e)=>{
     const{name,value}=e.target;
     setChangeData((prevData)=>({
      ...prevData,
      [name]:value
     }))
  }




  return (
    <>
      <center>
<section className="signin">
   <div className="container mt-5">
   <div className="signup-content">
   <div className="signup-form">
   <h2 className="form-title">ChangePassword</h2>
   <div className="mt-4"/>
   <form className="register-from" id="register-form">
    <div className="from-group">
      <label htmlFor="name"></label>
     <b> E-Mail:</b> <input type="text" className="col-form-label" id="email" autoComplete="off" name=" Email" size={50} value={ChangeData.Email} onChange={handlerPasswordchange}placeholder="E-mail"
      />
    </div><br></br>
    <div className="from-group">
    <label htmlFor="name"></label>
    <b>Password:</b> <input type="text" className="col-form-label" id="email" autoComplete="off" name="Password" value={ChangeData.Password} onChange={handlerPasswordchange} size={50} placeholder=
      " Password"/>
    </div><br></br>
    <div className="from-group">
      <label htmlFor="name"></label>
     <b>Confirm Password:</b> <input type="text" className="col-form-label" id="email" autoComplete="off" name="ConfirmPassword"  value={ChangeData.ChangePassword} onChange={handlerPasswordchange}size={50}  placeholder="Confirm Password"
      />
    </div><br></br>
    

  <button type="submit" className="btn btn-success" on onClick={()=>handlerChangeSubmit("/")}>Change</button>
  <br></br><br></br>
  <b>Login<Link to="/">Click here</Link></b><br></br>
  
</form>
  
    </div>
    </div>
    </div>
 </section>
 </center>
    </>
  )
}

export default ChangePassword
