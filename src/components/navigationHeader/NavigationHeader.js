import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationHeader.css';

const NavigationHeader = ()=>{
    return(
        <div className="navigation">
        <div className="navLink"><NavLink activeClassName="isActive" className="link" to="/home">Home</NavLink></div>
        <div className="navLink"><NavLink activeClassName="isActive" className="link" to="/favourite">Favourite</NavLink></div>
        <div className="navLink"><NavLink activeClassName="isActive" className="link" to="/classification">Classification</NavLink></div>
        
      
        </div>
    )
}

export default NavigationHeader