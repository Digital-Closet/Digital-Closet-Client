import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
<div>
  <ul className="nav d-flex justify-content-between shadow" style={{backgroundColor: '#C0ACA0', fontFamily:'Glacial'}}>
    <li className="nav-item" >
      <NavLink className="nav-link" aria-current="page" to="/" style={{color:'black'}} >
        HOME
        </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login" style={{color:'black'}}>
        LOGIN
        </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register" style={{color:'black'}}>
        REGISTER
        </NavLink>
    </li>
    
  </ul>
</div>

  )
}


export default Menu
