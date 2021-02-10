import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header>
            <div className="header-content">
                <Link to="/">Pentacle CSS</Link>
            </div>
        </header>
    }
}

export default Header
