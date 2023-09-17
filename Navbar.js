import React from 'react'
// import { Link } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

 export const Navbar = () => {
  const NavLinkStyles = ({isActive})=>{
    return{
      fontweight : isActive ?'bolder':'normal',
      textDecoration : isActive ?'underline':'none'
    
    }
   }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" style={NavLinkStyles} to="/Login" ><b>Login</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" style={NavLinkStyles} to="/Registration"><b>Registration</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" style={NavLinkStyles} to="/ChangePassword"><b>ChangePassword</b></NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </>

   
  )
}

export default Navbar
