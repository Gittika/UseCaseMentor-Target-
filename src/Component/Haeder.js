import React from 'react'
import pic from "./th.jpg"

// import {Navbar  ,Container } from 'react'
export const Haeder = () => {
  return (
   <>
    
    <nav className="navbar navbar-dark bg-dark">

    <div className="navbar-brand" style={{display:'inline'}}
    >
        <div style={{display:'inline'}}>
        <h3>UPCURVE MENTORS
        
      <img src={pic} alt="logo"></img>
       </h3>
       </div>
   
  </div>
</nav>
  </>
    
  )
}
