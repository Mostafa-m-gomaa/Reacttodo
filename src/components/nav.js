import React from "react";
import {Link, NavLink } from "react-router-dom";

const Nav = () =>{
    return(
        <div className="nav">
            <div className="logo">logo</div>
            <ul>
                <NavLink exact to="/">home </NavLink>
                <NavLink to="/sayed">sayed  </NavLink>
                <NavLink to="/emad">yasser</NavLink>
               
            </ul>
        </div>
    )
}
export default Nav ;
