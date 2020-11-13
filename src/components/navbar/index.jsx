import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info header-main">
            <Link to="/list" >
                <a className="navbar-brand" style={{ color: "#fff" }}>Navbar Brand</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to="/">
                        <a className="nav-link" style={{ color: "#fff" }}>+ Add Event<span className="sr-only">(current)</span></a>
                    </Link>
                    <Link to="/">
                        <a className="nav-link" style={{ color: "#fff" }}>Dashboard</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
