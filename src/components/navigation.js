import React, {Component} from "react"
import {HashLink as Link} from "react-router-hash-link"

class Navigation extends Component {
    render() {
        return <nav>
            <ul className={"nav-content"}>
                <li><Link to="/layout">Layout</Link></li>
                <li><Link to="/box">Box</Link></li>
                <li><Link to="/flex">Flex</Link></li>
                <li><Link to="/fonts">Fonts</Link></li>
                <li><Link to="/typography">Typography</Link></li>
                <li><Link to="/inputs">Inputs (WIP)</Link></li>
            </ul>
        </nav>
    }
}

export default Navigation
