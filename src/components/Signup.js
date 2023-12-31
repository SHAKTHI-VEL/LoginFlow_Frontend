import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
  let navigate = useNavigate(); 
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const {email,password}=credentials;
    const response = await fetch("https://authapi-cegx.onrender.com/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
    });
    const json = await response.json()
    
    if (json.success){
        // Save the auth token and redirect
        sessionStorage.setItem('token', json.authtoken); 
        navigate("/home");

    }
    else{
        alert("Invalid credentials");
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div className="container mt-3">
    <h1 className="my-2">SignUp</h1>
      <form onSubmit={handleSubmit}> 
     
  <div className="mb-3">
    <label htmlFor="email" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}  value={credentials.email} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" minLength={5} required  onChange={onChange} />
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup