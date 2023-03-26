import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink 
                        to="/" 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}>
                            Home
                        </NavLink>

                        <NavLink 
                        to="/about" 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}>
                            About
                        </NavLink>
                        <NavLink 
                        to="/Login" 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}>
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
