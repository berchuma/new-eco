import { useState } from "react";

const Loginform = ({Login,error}) => {
    const [details,setDetails]=useState({name:"",email:"",password:""})
    
    const submiteHandeler=(e)=>{
        e.preventDefault()
        Login(details)

       
    }
  return (
    <form onSubmit={submiteHandeler}>
      <div className="inner-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={e=>{setDetails({...details,name:(e.target.value)})}} value={details.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={e=>{setDetails({...details,email:e.target.value})}} value={details.email}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" name="name" id="password" onChange={e=>{setDetails({...details,password:e.target.value})}} value={details.password}/>
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Loginform;
