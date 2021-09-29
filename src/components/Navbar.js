import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    //useLocation hook returns us an object of location information of current event
    let location = useLocation();

    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* we have used useLocation to determine the current page and set its path in navbar as active class */}
                        <li className={`"nav-item" ${location.pathname === "/" ? "active" : " "}`}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`"nav-item" ${location.pathname === "/about" ? "active" : " "}`}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
