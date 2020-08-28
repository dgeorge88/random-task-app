import React from "react"
import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <Link to="/"><h2>Random Task</h2></Link>
            <Link to="/view"><h3>View Tasks</h3></Link>
        </header>
    )
}

export default Header