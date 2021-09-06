import React from 'react'
import '../NavBar/NavBar.css'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return(
            <div className="NavBar">
                <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <span>Geeks Banks</span>
                </Link>
                </div>
            </div>
        )
    }
}

export {NavBar}