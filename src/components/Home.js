import React from 'react'
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  
  

 

    let navigate = useNavigate();
    useEffect(() => {
     
        

        if(!(!!(sessionStorage.getItem('token')))){
      
            navigate("/login")
        }else{
          
         
            navigate("/home")
          
          
        }
        
         
          // eslint-disable-next-line
        
       }, [])
  return (
    <div>Welcome to the Home Screen</div>
  )
}

export default Home