import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component{
    render(){
        return(
        <div>
        <nav role="navigation">
        <div id="menuToggle">
   
     <input type="checkbox" />
     <span></span>
     <span></span>
     <span></span>
    
    <ul id="menu">
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/contactus">Contact Us</Link>
    </ul>
  </div>
</nav>
</div>
        )
    }
}

export default Nav;