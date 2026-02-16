import { Link } from "react-router-dom";
import React from "react";
import './Nav.css';

function Nav(){
  return (
    <div>
      <div className="navbar">
        <Link className="menu" to={'/'}>MAIN</Link>
        <Link className="menu" to={'/about'}>ABOUT</Link>
        <Link className="menu" to={'/team'}>TEAM</Link>
        <Link className="menu" to={'/sponsor'}>SPONSOR</Link>
        <Link className="menu" to={'/other'}>OTHER LEAGUE</Link>
      </div>
    </div>
  )
}

export default Nav